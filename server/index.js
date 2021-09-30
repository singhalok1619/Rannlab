const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '8722',
    database: 'alok',
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req, res)=>{

    const ID = req.body.ID
    const Name = req.body.Name
    const Document = req.body.Document
    
    const sqlInsert= "INSERT INTO registration(ID, Name, Document) VALUES (?,?)";
    db.query(sqlInsert, [ID, Name, Document], (err, result)=>{
       
        console.log(err);

    })
});

app.listen(3002, ()=>{
    console.log("running on port 3002");
} )