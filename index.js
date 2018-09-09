
var express=require('express');
var app=express();
console.log(__dirname);
app.use(express.static(__dirname+'/assets'));




console.log("initiating killbot 10,000");
console.log("Authored by: Kent Enterprise")



app.listen(8000, function(){
	console.log("listen on port 8000")
});