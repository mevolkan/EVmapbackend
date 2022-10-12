// chargingStatiionModel.js

var mongoose = require('mongoose');

// Setup schema
var stationsSchema = mongoose.Schema({
    name: {
      type: 'string',
      required: true
    },
    address: String,
    chargerType: {
      type: 'string',
      // required: true
    },
    watts: String,
    payment: Boolean,
    verified: Boolean,
    amount: Number,
    location: {
        type: {
          type: String, 
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
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