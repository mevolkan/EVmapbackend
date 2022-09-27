// api-routes.js

// Initialize express router
let router = require('express').Router();


// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'Welcome to EV Map API crafted with love by Volkan!',
    });
});


// Import hospital controller
var chargingStationController = require('./controllers/chargingStationController');



// Hospital routes
router.route('/stations')
    .get(chargingStationController.index)
    .post(chargingStationController.new);

router.route('/stations/:station_id')
    .get(chargingStationController.view)
    .patch(chargingStationController.update)
    .put(chargingStationController.update)
    .delete(chargingStationController.delete);


// Export API routes
module.exports = router;