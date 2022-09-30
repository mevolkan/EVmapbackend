// chargingStatiionModel.js

var mongoose = require('mongoose');

// Setup schema
var stationsSchema = mongoose.Schema({
    name: String,
    address: String,
    chargerType: String,
    watts: String,
    payment: Boolean,
    amount: Number,
    location: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export charging station model
var ChargingStation = module.exports = mongoose.model('chargingStation', stationsSchema);

module.exports.get = function (callback, limit) {
    ChargingStation.find(callback).limit(limit);
}