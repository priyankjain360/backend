const express = require('express');
const p5Controller = require('../controllers/p5Controller');

const router = express.Router();

router.post('/p5', p5Controller.transferP5);
router.delete('/p5/:id', p5Controller.deleteP5Transaction);

module.exports = router;