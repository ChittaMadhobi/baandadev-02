const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  baandaid: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  oauthId: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  avatar: {
    type: String
  },
  registrationType: {
    type: String,
    default: 'regular'
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  confirmCode: {
    type: Number
  },
  confirmBy: {
    type: Date
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model('users', UserSchema);
