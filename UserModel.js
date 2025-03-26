const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    gmail:{
        type:String,//dataType
        required:true,//validate
    },
    city:{
        type:String,//dataType
        required:true,//validate
    },
    phone:{
        type:Number,//dataType
        required:true,//validate
    },
    age:{
        type:String,//dataType
        required:true,//validate
    },
    howknow:{
        type:String,//dataType
        required:true,//validate
    },
    title:{
        type:String,//dataType
        required:true,//validate
    },
    instructor:{
        type:String,//dataType
        required:true,//validate
    },
    month:{
        type:String,//dataType
        required:true,//validate
    },
    date:{
        type:String,//dataType
        required:true,//validate
    }

});

module.exports = mongoose.model(
    "UserModel",//file name
    userSchema //function name
)