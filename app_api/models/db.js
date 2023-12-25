var mongoose  =require("mongoose");
//var dbURI= "mongodb://127.0.0.1/mekanbul";
var dbURI="mongodb+srv://root:root123@cluster0.hmjfwxi.mongodb.net/"
mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log("Bağlandı");
});
mongoose.connection.on("error", function(){
    console.log("Bağlantıda hata var");
});
mongoose.connection.on("disconnected", function(){
    console.log("Her eyes left school my mind is bad");
});
process.on("SIGINT" ,function(){
    mongoose.connection.close();
    console.log("Uygulama kapatıldı");
    process.exit(0);
});
require("./venue"); 

//Şifre:byqvEpmckUz14vQR