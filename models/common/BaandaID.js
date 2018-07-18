const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BaandaIDSchema = new Schema({
  ref: {
    type: String,
    required: true
  },
  newBaandaID: {
    type: Number,
    required: true
  }
});

//module.exports = BaandaID = mongoose.model('baandaid', BaandaIDSchema);
module.exports = mongoose.model('BaandaID', BaandaIDSchema);
