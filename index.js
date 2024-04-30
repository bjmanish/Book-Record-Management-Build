const express = require("express");
const {users} = require("./data/users.json");
const {books} = require("./data/books.json");
const app = express();
const port = 8081;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running:",
        data : "hello manish",
    })
})

/*
* Route: /users
*Methods : GET
*Description: Get all users
*Access: Public
* Parameters:None
*/
app.get("/users", (req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    });
});

app.get("/books", (req,res)=>{
    res.status(200).json({
        success: true,
        data: books,
    });
});


app.get("*",(req,res)=>{
    res.status(400).json({
        message:"This route doesnot exist"
    })
})

app.listen(port,()=>{
    console.log(`Server is running at port:${port}`);
})
