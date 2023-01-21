const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser, getUserById, updateUserById, deleteUserById } = require("../controllers/User");

userRouter
  .route("/")
  .get(getAllUsers)
  .post(addUser);


userRouter
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = userRouter;