require('./database/config');
const express = require("express");

const cors = require("cors");

const User=require('./database/User');
const Producthunting = require('./database/Producthunting');
const Productsourcing= require('./database/Productsourcing');
const Productlisting = require('./database/Productlisting');

const app= express();

app.use(express.json());
app.use(cors());

app.post("/huntedproduct", async(req,res)=>{

    let product= new Producthunting(req.body);
    let result = await product.save();
        res.send(result);
});

app.post("/sourcedproduct",async(req,res)=>{
    let product= new Productsourcing(req.body);
    let result= product.save();
    res.send(result);
});

app.post("/productlisting", async(req,res)=>{
    let product= await new Productlisting(req.body);
    let result= await product.save();
    res.send(result);
});

app.get("/getcounthunting/:id", async(req,res)=>{
    const id = req.params.id;

    let count = await Producthunting.countDocuments(
        {
            userid: id
        }
    );
    res.json(count);
});

app.get("/getcountsourcing/:id", async(req,res)=>{
    const id = req.params.id;

    let count = await Productsourcing.countDocuments({
        userid:id
    });
    res.json(count);
});

app.get("/getcountlisting/:id", async(req,res)=>{
    const id = req.params.id;
    let count = await Productlisting.countDocuments({
        userid:id
    });
    res.json(count);
});

app.get("/getlistedproducts/:id", async(req,res)=>{
    const id = req.params.id;
    let result = await Productlisting.find({
        userid:id
    });
    if(result.length>0){
        res.send(result);
    }
    else{
        res.send({result:"No record Found"});
    }
    
});

app.get("/getsourcedproducts/:id",async(req,res)=>{
    const id = req.params.id;
    let result = await Productsourcing.find({
        userid: id
    });
    if(result.length>0){
        res.send(result);
    }
    else{
        res.send({result:"No record Found"});
    }
    
});



app.get("/gethuntedproducts/:id", async(req,res)=>{
    const id = req.params.id;
        let result = await Producthunting.find({
            userid: id
        });

        if(result.length>0){
            res.send(result);
        }
        else{
            res.send({result:"No record Found"});
        }
            
});

app.post("/register",async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.password;
    res.send(result);

})

app.post("/login", async(req,res)=>{
    if(req.body.email && req.body.password){
        let user= await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send({result:"no user found"})
        }
    }
    else{
        res.send({result:"something is missing"})
    }
})

app.listen(5000);