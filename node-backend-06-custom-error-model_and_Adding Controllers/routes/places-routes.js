const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('../models/http-error');

const router = express.Router();

const placesControllers = require('../controllers/places-controllers')

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid',placesControllers.getPlaceByUserId);

router.post('/',placesControllers.createPlace)

module.exports = router;