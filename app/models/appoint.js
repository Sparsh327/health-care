const mongoose = require("mongoose");

const Schema = mongoose.Schema

const appointSchema = new Schema({
   patientId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required:true,

    },
    date:{type:String,required:true},
    time:{type:String,required:true},
    doctor:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    mobile:{type:String,required:true},
    status:{type:String,default:"Confirmed"}
    
},{timestamps:true})

module.exports = mongoose.model("Appointment",appointSchema)