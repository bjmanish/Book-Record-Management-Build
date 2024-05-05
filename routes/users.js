const express = require("express");

const {users} = require("../data/users.json");

const router = express.Router();


/*
* Route: /
*Methods : GET
*Description: Get all users info
*Access: Public
* Parameters:None
*/
router.get("/", (req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    });
});

/*
* Route: /:id
*Methods : GET
*Description: Get all single user by their id
*Access: Public
* Parameters:None
*/

router.get("/:id",(req,res)=>{
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
* Route: /
*Methods : POST
*Description: Create new user
*Access: Public
* Parameters: None
*/

router.post("/",(req,res) =>{
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
* Route: /:id
*Methods : PUT
*Description: Updating user by their id
*Access: Public
* Parameters: ID
*/
router.put("/:id",(req,res)=>{
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
* Route: /:id
*Methods : DELETE
*Description: Deleting user by their id if not any issued books and no any fine
*Access: Public
* Parameters: ID
*/
router.delete("/:id",(req,res)=>{
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

module.exports = router;