const mongoose = require('mongoose');
const ChatFormatSchema = require('./utils/ChatFormatSchema');

// import { uuid } from 'uuidv4';

const ChatSchema = new mongoose.Schema({
  stockOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});


module.exports = mongoose.model('Chat', ChatSchema);
