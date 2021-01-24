const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/shopping';
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const ProductdetailsSchema = new Schema({
    productdetails:{
        type : Schema.Types.ObjectId,
        ref : 'productdetails'
    },
    userid:{
        type:String
    },
    product :{
        type:String,        
    },       
    status :{
        type:String,
        default:'Cart'
        //- Activated / deactivated
    },       
    creation_date:{
        type:Date,
        default:Date.now
    },
   
});
module.exports = Productdetails = mongoose.model('Productdetails',ProductdetailsSchema);