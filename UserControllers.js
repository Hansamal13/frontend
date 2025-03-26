const User = require("../Model/UserModel");
//data display
const getAllusers = async(req, res, next) => {

    let users;

    // Get all users
    try{
        users = await User.find();
    }catch (err) {
        console.log(err);
    } 
    //not found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    //Display all users
    return res.status(200).json({users});
};

// data insert
const addUsers = async (req, res, next) => {

    const {name, gmail, city, phone, age, howknow, title, instructor, month, date} = req.body;

    let users;

    try {
        users = new User({name, gmail, city, phone, age, howknow, title, instructor, month, date});
        await users.save();
    }catch (err) {
        console.log(err);
    }
    //not insert users
    if (!users) {
        return res.status(404).json({ message: "unable to add users"});
    }
    return res.status(200).json({ users });
};

//Get by Id
const getById = async (req, res, next) => {

    const id = req.params.id;

    let users;

    try {
        users = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    //not available users
    if (!users) {
        return res.status(404).json({ message: "User not found"});
    }
    return res.status(200).json({ users });

};

//Update user details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {name, gmail, city, phone, age, howknow, title, instructor, month, date} = req.body;

    let users;

    try {
        users = await User.findByIdAndUpdate(id, 
            { name: name, gmail: gmail, city: city, phone: phone, age: age, howknow: howknow, title: title, instructor: instructor, month: month, date: date});
            users = await users.save();
    } catch (err) {
        console.log(err);
    }
    //not update user details
    if (!users) {
        return res.status(404).json({ message: "Unable to Update User Details"});
    }
    return res.status(200).json({ users });
};

//Delete user details
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let users;

    try {
        users = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    //not delete user
    if (!users) {
        return res.status(404).json({ message: "Unable to Delete User Details"});
    }
    return res.status(200).json({ users });
}

exports.getAllusers = getAllusers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;