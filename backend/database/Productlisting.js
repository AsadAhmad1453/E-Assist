const mongoose= require('mongoose');

const productlistingSchema = new mongoose.Schema({
        productname: String,
        Storename: String,
        Accounttype: String,
        userid: String
});

module.exports= mongoose.model("productlisting", productlistingSchema);