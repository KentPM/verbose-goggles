
var express=require('express');
var app=express();
console.log(__dirname);
app.use(express.static(__dirname+'/assets'));


app.listen(8000, function(){
	console.log("listen on port 8000")
});

console.log("initiating killbot 10,000");
