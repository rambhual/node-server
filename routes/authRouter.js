const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

router.post('/register', authCtrl.createUser);
router.post('/login', authCtrl.LoginUser);



module.exports = router;
