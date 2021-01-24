const express = require('express')
//const app = express()
var router = express.Router();
const Category = require('./../models/category');
const fs = require('fs');
router.post('/add',(req,res)=>{
 Category.findOne({name:req.body.fields.name},function(err,result){
     if(err){
         res.json({result:0,message:"Failed to add record"});
     }
     if(result){
        res.json({result:0,message:"Category name alredy exist"});
     }else{
        var imagepath= [];
        var filearray = [];
       filearray.push(req.body.fields.image);        
        imagepath = saveImg(filearray);
        if(imagepath.length != 0){
            req.body.fields.image= imagepath[0];          
        }  
        const newcat = new Category(req.body.fields);
        newcat.save(function(err,result){
            if(err){
                res.json({result:0,message:"Failed to add record"});
            }else{               
                res.json({result:1,message:"success"});
            }
        })
     }
 });

});
router.get('/index',async(req,res)=>{
    const list = await Category.find({}).sort({_id:-1});
        res.json(list);
    })
router.get('/category',async(req,res)=>{
        const list = await Category.find({status:"Active"}).sort({name:1});
            res.json(list);
        })
module.exports = router;
function saveImg(filesarr){
    var dirpath='http://143.110.246.237/nodeapp/public/images/';
    var imagepath= [];
    if(filesarr !==''){
        for(var i=0;i<filesarr.length;i++)
        {
            var path ='';
            let files = filesarr[i]  
            if(filesarr[i] !== ''){                                                
                var matches = files.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)        
                response = {};
                if (matches === null||matches.length !== 3) {              
                if(matches === null){
                    path = filesarr[i];
                }
            }else{
                response.type = matches[1];
                response.data = new Buffer.from(matches[2], 'base64');
                let decodedImg = response;
                let imageBuffer = decodedImg.data;
                let type = decodedImg.type;
                var filetype = checkfiletype(type);                
                if(filetype ===''){
                    return 0;
                }
                let fileName = "image-" + Date.now() + "." + filetype;
                try {
                    fs.writeFileSync("./public/images/" + fileName, imageBuffer, 'utf8');                  
                        path = dirpath+fileName;                    
                } catch (e) {               }
            }
        }
            imagepath.push(path);              
        }

    } 
    return imagepath;   
}
function checkfiletype(type){
   // var filetype = "";
    if (type === "image/gif") {
        return "gif";
    }
    if (type === "image/png") {
        return "png";
    }
    if (type === "image/jpeg"||type === "image/jpg") {
        return "jpg";
    }
    if(filetype ===''){
        return '';
    }
}