import { create } from "domain";
import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const result = await usersService.getUserById(userId);
  res.send({ status: "success", message: "User deleted" });
};

const createUser = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const one = await usersService.create(req.body);
    console.log("Created user:", one);
    return res.status(201).json({ status: "success", payload: one });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  createUser,
};
