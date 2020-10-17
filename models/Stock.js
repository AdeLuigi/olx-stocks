const mongoose = require('mongoose');


const StockSchema = new mongoose.Schema({
    stockOwner: {Type:String},
  
});
module.exports = mongoose.model('Stock', StockSchema);
