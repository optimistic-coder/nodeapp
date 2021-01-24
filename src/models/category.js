const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/shopping';
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    categories:{
        type : Schema.Types.ObjectId,
        ref : 'categories'
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
    sequence:{
        type:String,
        default:'0'
    }
   
});
module.exports = Category = mongoose.model('Category',CategorySchema);