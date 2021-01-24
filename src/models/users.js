const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/shopping';
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    users:{
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
    username:{
        type:String
    },
    password:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:'',
    },
    reg_by:{
        type:String,
        default:''
    },
    role:{
        type:String,
        default:'Customer'
    },
    status :{
        type:String,
        default:'Inactive'
        //- Activated / deactivated
    },
    created_by :{
        type:String,
        default :''
        //- save login_id here
    },   
    creation_date:{
        type:Date,
        default:Date.now
    },
   
});
module.exports = Category = mongoose.model('Category',CategorySchema);