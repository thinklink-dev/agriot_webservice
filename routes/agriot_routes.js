const express = require('express');
const router = express.Router();
const agriot = require('../services/agriot');

/* GET humedad_suelo listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(agriot.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

/* POST humedad_suelo values */
router.post('/', function(req, res, next) {
  try {
    res.json(agriot.create(req.body));
  } catch(err) {
    console.error(`Error while adding quotes `, err.message);
    next(err);
  }
});

module.exports = router;