const mongoose= require('mongoose');

const productsourcingSchema = new mongoose.Schema({
        productname: String,
        price: String,
        lists: String,
        url: String,
        userid: String
});

module.exports= mongoose.model("productsourcing", productsourcingSchema);