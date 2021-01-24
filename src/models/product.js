const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/shopping';
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    product:{
        type : Schema.Types.ObjectId,
        ref : 'product'
    },
    name:{
        type:String
    },
    keyword:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:'',
    },
    status :{
        type:String,
        default:'Inactive'
        //- Activated / deactivated
    },
    mrp:{
        type:String,
        default:'0'
        },
    sp:{
        type:String,
        default:'0'
    },
    discount:{
        type:String,
        default:'0'
    },
    description :{
        type:String,
        default :null
        //- save login_id here
    },  
    category :{
        type:String,
        default :null
        //- save login_id here
    }, 
    subcategory :{
        type:String,
        default :null
        //- save login_id here
    },      
    creation_date:{
        type:Date,
        default:Date.now
    },
   is_offer:{
       type:String,
       default:'No'
   }
});
module.exports = Product = mongoose.model('Product',ProductSchema);