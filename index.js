var express= require("express");
var todoRoutes = require("./routes/todos");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
   res.sendFile("index.html");
});
app.use("/api/todos", todoRoutes);

app.listen(port, function(){
   console.log("app is running on port" + process.env.PORT); 
});