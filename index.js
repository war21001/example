var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended  : true }));

app.use(express.static(("public")));
var ms = require("./math");

app.set("view engine", "ejs");


app.set("port", process.env.PORT || 3000);

app.get("/", getData);
app.post("/", postData);
function getData(req, res)
{
    // console.log("getting data");
    // res.write("{\"name\" : \"Lisa\"}");
    res.render("results", { var1 : "2", var2 : "2", sign : "+", result: "4" });
    res.end();
}

function postData(req, res)
{
    console.log("posting data");
    console.log(req.body.var1);
    console.log(req.body.var2);
    console.log(req.body.sign);

    var var1=req.body.var1;
    var var2=req.body.var2;
    var sign=req.body.sign;

    var result= ms.compute(var1, sign, var2);

    res.render("results", { var1 : var1, var2 : var2, sign : sign, result: result });
    res.end();
}


app.listen(app.get("port"), () => console.log("server is listening on port" + app.get("port") ));
