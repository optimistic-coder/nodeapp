const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/shopping';
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const SubCategorySchema = new Schema({
    subcategories:{
        type : Schema.Types.ObjectId,
        ref : 'subcategories'
    },
    category:{
        type:String,
        default:null
    },
    name:{
        type:String
    },
    image:{
        type:String,
        default:null,
    },
    status :{
        type:String,
        default:'Inactive'
        //- Activated / deactivated
    },
    created_by :{
        type:String,
        default :null
        //- save login_id here
    },   
    creation_date:{
        type:Date,
        default:Date.now
    },
   
});
module.exports = SubCategory = mongoose.model('SubCategory',SubCategorySchema);