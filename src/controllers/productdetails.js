const express = require('express')
//const app = express()
var router = express.Router();
const ProductDetails = require('./../models/productdetails');
const fs = require('fs');
router.post('/add',(req,res)=>{    
    const newcat = new ProductDetails(req.body);
    newcat.save(function(err,result){
        if(err){
            res.json({result:0,message:"Failed to add record"});
        }else{               
            res.json({result:1,message:"success"});
        }
    })     
});
router.get('/index',async(req,res)=>{
    const list = await ProductDetails.find({}).sort({_id:-1});
        res.json(list);
    })
module.exports = router;
