const mongoose = require('mongoose');


const StockSchema = new mongoose.Schema({
    stockOwner: {Type:String},
    location: {Type: String},
    rate: {Type: String}
  
});
module.exports = mongoose.model('Stock', StockSchema);
