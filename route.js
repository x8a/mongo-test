const {Router} = require("express");
const router = Router();
const User = require("./user");

const createNewUser = async (req, res) => {
    const {name, surname} = req.body;
    const newUser = await User.create({name, surname});
    console.log(newUser);
    res.json(newUser);
};

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

router.route("/").post(createNewUser).get(getAllUsers); // Cannot repeat the methods but you can add one of each
// http://localhost:4000/users

module.exports = router;