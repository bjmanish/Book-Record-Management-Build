const express = require("express");
const {users} = require("./data/users.json");
const {books} = require("./data/books.json");
const app = express();
const port = 8081;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running:"    
    });
});

/*
* Route: /users
*Methods : GET
*Description: Get all users info
*Access: Public
* Parameters:None
*/
app.get("/users", (req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    });
});

/*
* Route: /users/:id
*Methods : GET
*Description: Get all single user by their id
*Access: Public
* Parameters:None
*/

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user_id)=>user_id.id === id);
    if(!user){
        return res.status(404).json({
            success : false,
            message : "User doesnot exist !",
        });
    }
    return res.status(200).json({
        success : true,
        message : "user exist",
        data : user
    });
    
});

/*
* Route: /users/
*Methods : POST
*Description: Create new user
*Access: Public
* Parameters: None
*/

app.post("/users",(req,res) =>{
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;
    const user = users.find((user_id)=>user_id.id===id);
    if(user){
        return res.status(404).json({
            success : false,
            message : "user already exist !",
        });
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });
    return res.status(200).json({
        success: true,
        message: "user added success",
        data: users,
    });
});

/*
* Route: /users/:id
*Methods : PUT
*Description: Updating user by their id
*Access: Public
* Parameters: ID
*/
app.put("/users/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;
    const user = users.find((user_id)=>user_id.id===id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "user doesnot exist for this id so u cann't update!",
        });
    }
    const updateUserData = users.map((each)=>{
        if(each.id===id){
            return{
                ...each,
                ...data,
            };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        message: "user updated success.",
        data: updateUserData,
    });
});

/*
* Route: /users/:id
*Methods : DELETE
*Description: Deleting user by their id if not any issued books and no any fine
*Access: Public
* Parameters: ID
*/
app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user_id)=>user_id.id===id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User doesnot Exist!",
        });
    } 
    return res.status(200);


});

/*
* Route: /books
*Methods : GET
*Description: Get all books info
*Access: Public
* Parameters: None
*/
app.get("/books", (req,res)=>{
    res.status(200).json({
        success: true,
        data: books,
    });
});

/*
* Route: /books/:id
*Methods : GET
*Description: Get books info with their id
*Access: Public
* Parameters: None
*/
app.get("/books/:id",(req,res)=>{
    const {id} = req.params;
    const book = books.find((book_id)=> book_id.id===id );
    if(!book){
        res.status(404).json({
            success: false,
            message: "book doesn't exist!"
        });
    }
    return res.status(200).json({
        success: true,
        message: "book exists",
        data: book,
    
    });
});





app.get("*",(req,res)=>{
    res.status(400).json({
        message:"This route doesnot exist"
    });
});

app.listen(port,()=>{
    console.log(`Server is running at port:${port}`);
});
