const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController');

/* GET home page. */
router.get('/', locationController.getIndex);

/* GET location list page. */
router.get('/list', locationController.getLocationList);

/* GET location create page. */
router.get('/list/create', locationController.getLocationCreate);

module.exports = router;