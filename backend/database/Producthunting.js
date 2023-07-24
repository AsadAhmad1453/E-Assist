const mongoose= require('mongoose');

const producthuntingSchema = new mongoose.Schema({
        productname: String,
        sellingprice: String,
        recommendedprice: String,
        userid: String
});

module.exports= mongoose.model("producthunting", producthuntingSchema);