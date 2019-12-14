var express= require("express");
var mysql=require("mysql");
var app=express();
var body=require('body-parser');

app.use(body.urlencoded({ extended: false }))

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'exanalytics'
})

connection.connect(function(error){

    if(!!error){
        console.log('Error'); 
       } else{

        console.log('Connected');
       }
});
const port=5000;
app.get("/api/customers",function(req,res){
    const customers=[
        {id:1,firstName:'Niraj',lastName:'Jain'},
        {id:2,firstName:'Niraj',lastName:'Jimmer'},
        {id:3,firstName:'Niraj',lastName:'Smith'}
    
    ];

    res.json(customers);
})
app.get("/download",function(req,res)
{
   const e=__dirname+"/uploadfold/customer.xlsx"
    res.json(e);
    });


app.get("/sqltest",function(req,res){
     connection.query("select * from students",function(error,results){
     if(error){
         res.status(400).send('error in database operation');
     }else{
         console.log(results);
         res.send(results);
     }       
     });

})


app.post('/users',(req,res)=>{
    var user=req.body.da;
    var u=user;
    
  console.log(u);
  var sql = "INSERT INTO users (Username) VALUES ('"+user+"')";
  var values=[["Niraj","Aditya"]];
 console.log(values[0][0])
    connection.query(sql,function(err, result) {
        // Neat!
        if(error){
            res.status(400).send('error in database operation');
        }else{
            console.log(results);
            res.send(results);
        }       
        
      });
      
      res.end('Success');
    });
app.listen(port,function(){
    console.log(`Server is cstarted on port ${port}`)
})