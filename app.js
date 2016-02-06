var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/static/';

app.set('port', (process.env.PORT || 5000));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});



app.use("/",router);
app.use(express.static('static'))

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("Live at Port", app.get('port'));
});