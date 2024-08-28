const p5Service = require('../services/p5Service');

const transferP5 = async (req, res) => {
  try {
    const { fromUserId, toUserId, points } = req.body;
    const transaction = await p5Service.transferP5(fromUserId, toUserId, points);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteP5Transaction = async (req, res) => {
  try {
    await p5Service.deleteP5Transaction(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  transferP5,
  deleteP5Transaction,
};