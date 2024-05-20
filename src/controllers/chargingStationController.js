// Charging Station Controler

// Import chargingStation model
ChargingStation = require('../models/chargingStationModel');

// Handle index actions
exports.index = function (req, res) {
    ChargingStation.get(function (err, chargingStations) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Charging stations retrieved successfully",
            data: chargingStations
        });
    });
};

// Handle create Charging Station actions
exports.new = function (req, res) {
    var chargingStation = new ChargingStation();
    chargingStation.name = req.body.name ? req.body.name : chargingStation.name;
    chargingStation.address = req.body.address;
    chargingStation.chargerType = req.body.chargerType;
    chargingStation.watts = req.body.watts;
    chargingStation.payment = req.body.payment;
    chargingStation.amount = req.body.amount;
    chargingStation.location = req.body.location;
    chargingStation.verified = req.body.verified;

    // save the chargingStation and check for errors
    chargingStation.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New charging station created!',
            data: chargingStation
        });
    });
};

// Handle view charging station info
exports.view = function (req, res) {
    ChargingStation.findById(req.params.station_id, function (err, chargingStation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Charging Station details loading..',
            data: chargingStation
        });
    });
};

// Handle update charging station info
exports.update = function (req, res) {

    ChargingStation.findById(req.params.station_id, function (err, chargingStation) {
        if (err)
            res.send(err);

        chargingStation.name = req.body.name ? req.body.name : chargingStation.name;
        chargingStation.address = req.body.address;
        chargingStation.chargerType = req.body.chargerType;
        chargingStation.watts = req.body.watts;
        chargingStation.payment = req.body.payment;
        chargingStation.amount = req.body.amount;
        chargingStation.location = req.body.location;
        chargingStation.verified = req.body.verified;

        // save the chargingStation and check for errors
        chargingStation.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'ChargingStation Info updated',
                data: chargingStation
            });
        });
    });
};

// Handle delete chargingStation
exports.delete = function (req, res) {
    ChargingStation.remove({
        _id: req.params.station_id
    }, function (err, chargingStation) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Charging station details deleted'
        });
    });
};