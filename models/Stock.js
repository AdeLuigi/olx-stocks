const mongoose = require('mongoose');
//const ChatFormatSchema = require('./utils/ChatFormatSchema');
const Address = require('./utils/AddressSchema');


// import { uuid } from 'uuidv4';

const StockSchema = new mongoose.Schema({
    stockOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: Address,
    inStock: [{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },{
        nome:'celular',
        dono: 'idDono',
        enderecoOriginal: 'Endereço do lugar que veio o produto',
        status: 'comprado',
    },]
    
    //messages: { type: [ChatFormatSchema], required: true },
});


module.exports = mongoose.model('Stock', StockSchema);
