const mongoose  = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,

    },
    emailvalidation:{
        type:Boolean,
        default:false,
    },
    marchant:{
        type:String,
        default :false
    },
    role:{
        type:String,
        default:"member",
        enum:["member", "admin","merchant"],
    },
    
    facebookId:{
        type:String,
    },
    linkedinId:{
        type:String,
    },
    updated:{
        type:Date,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

})

module.exports = mongoose.model('user', userSchema);