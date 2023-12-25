var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author:{type:String, required:true},
    rating:{type:Number , required:true, min:0,max:5},
    text:{type:String,required:true},
    date:{type:Date,default:Date.now}
});

var hourSchema = new mongoose.Schema({
    days:{type:String, required:true},
    open:String,
    close:String,
    isClosed:{type:Boolean,required:false}
});

var venueSchema = new mongoose.Schema({
    name:{type:String,required:true},
    address:String,
    rating: {type:Number, min:0,max:5,default:0},
    coordinates: { type: Number, index: "2dsphere" },
    foodanddrink:[String],
    hours:[hourSchema],
    comments:[commentSchema]
});

mongoose.model("venue",venueSchema,"venues");


//mongodb+srv://ulutepe42:<password>@cluster0.hd1e0oo.mongodb.net/?retryWrites=true&w=majority