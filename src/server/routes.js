const express = require('express');
const router = express.Router();

const xero = require('./xero')

router.use('/', xero);

module.exports = router;