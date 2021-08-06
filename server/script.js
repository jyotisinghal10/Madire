const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "madire"
});


app.post('/register',(req,res)=>{

    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const shop = req.body.shop;
    const gst = req.body.gst;

    db.query("INSERT INTO retailer (name,email,number,shop_name,gst_no,password) VALUES(?,?,?,?,?,?)",
    [username,email,phone,shop,gst,password],console.log(req.body.radiogroup1),
    (err,result)=>{
        console.log(err);
    });
});

app.post('/login',(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM userdata WHERE username=? AND password=?",
    [username,password],
    (err,result)=>{
        if(err)
        {

           res.send({error: err});
        }
        else
        {
            if(result)
            {
                res.send(result);
            }
            else
            {
                res.send({message:"Wrong username or password"});
            }
        }
    });
});

app.listen(3001,()=>{
    console.log("Server running in the port 3001");
});
