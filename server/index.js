const express = require('express');
const cors = require('cors');
require('dotenv').config()
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// DB Connection

const db = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
)


// Routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.post('/register', (req, res) => {
    const {username, email, phone, password, repassword} = req.body;

    const sql = "SELECT * FROM `users` WHERE `email` = ?"
    db.query(sql,email,(err,response)=>{
        if (err) {
            console.log(err)
        }
        else if (response.length > 0){
            res.send({message:"User Already Registered"})
        }
        else if(password !== repassword){
            res.send({ message: "Password Does Not Matched" })
        }
        else{

            bcrypt.hash(password, 10, (err,hash)=>{
                const sql = "INSERT INTO `users`(`username`, `email`, `phone`, `password`) VALUES (?,?,?,?)"
                db.query(sql, [username, email, phone, hash], (err,response)=>{
                    if (err) {
                        console.log(err)
                    }
                    else{
                        res.send({ message: "User Successfully Registered" })
                    }
                })
            })
            
        }
    })
})

app.post("/login",(req, res)=>{
    const {email, password} = req.body;
    const sql ="SELECT `password` FROM `users` WHERE `email` = ? "
    db.query(sql,email,(err,response) => {
        if (err) {
            console.log(err)
        }
        else if (response.length > 0 ){
            bcrypt.compare(password, response[0].password, (err, result)=> {
                if (result) {
                    res.send({ message: "Successfully Logged In" })
                }
                else{
                    res.send({ message: "Wrong Password" })
                }
            });
        }
        else{
            res.send({ message: "User Does Not Exist" })
        }
    })
})

// Get All Users

app.get("/users",(req, res)=>{
    const sql = "SELECT `username`, `email`, `phone` FROM `users`"
    db.query(sql,(err,response)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log(response)
            res.send(response)
        }
    })
})

// Get specific user by ID

app.get("/users/:id")


const PORT = process.env.PORT || 8081

app.listen(PORT, ()=> {
    console.log("server is running at http://localhost:"+PORT)
})

