const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

router.get(
	'/getUserDetails',
	controller.getUserDetails
);

router.post(
	'/addOrUpdateUserDetails',
	controller.addOrUpdateUserDetails
);

module.exports = router;
