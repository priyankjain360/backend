const User = require('../models/userModel');
const RewardHistory = require('../models/rewardHistoryModel');

const transferP5 = async (fromUserId, toUserId, points) => {
  const fromUser = await User.findById(fromUserId);
  const toUser = await User.findById(toUserId);

  if (fromUser.p5Balance < points) {
    throw new Error('Insufficient P5 balance');
  }

  fromUser.p5Balance -= points;
  toUser.rewardBalance += points;

  await fromUser.save();
  await toUser.save();

  const rewardHistory = new RewardHistory({
    points,
    givenBy: fromUserId,
    givenTo: toUserId,
  });

  return await rewardHistory.save();
};

const deleteP5Transaction = async (transactionId) => {
  const transaction = await RewardHistory.findById(transactionId);
  const fromUser = await User.findById(transaction.givenBy);
  const toUser = await User.findById(transaction.givenTo);

  fromUser.p5Balance += transaction.points;
  toUser.rewardBalance -= transaction.points;

  await fromUser.save();
  await toUser.save();

  return await RewardHistory.findByIdAndDelete(transactionId);
};

module.exports = {
  transferP5,
  deleteP5Transaction,
};