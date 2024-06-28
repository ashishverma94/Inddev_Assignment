import dotenv from "dotenv";
import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import logger from "../utils/logger.js";

dotenv.config();

// CREATE USER
export const createUser = async (req, res) => {
  const {
    first_name,
    last_name,
    company_name,
    age,
    city,
    state,
    zip,
    email,
    web,
  } = req.body;

  if (!first_name) {
    logger.warn("Missing firstname in request body");
    return res.status(400).json({ message: "Please enter your firstname" });
  }

  if (!last_name) {
    logger.warn("Missing lastname in request body");
    return res.status(400).json({ message: "Please enter your lastname" });
  }

  if (!email) {
    logger.warn("Missing email in request body");
    return res.status(400).json({ message: "Please enter your email" });
  }

  const isEmailExist = await userModel.findOne({ email });
  if (isEmailExist) {
    logger.warn(`Email already exists: ${email}`);
    return res.status(400).json({ message: "Email already exist" });
  }

  try {
    const newUser = {
      first_name,
      last_name,
      company_name,
      age,
      city,
      state,
      zip,
      email,
      web,
    };

    const user = await userModel.create(newUser);

    logger.info(`User created: ${first_name} ${last_name}`);
    res.status(201).json(user);
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

// GET USER
export const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    logger.warn(`Invalid user ID: ${id}`);
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await userModel.findById(id);

    if (!user) {
      logger.warn(`User not found: ${id}`);
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    logger.error(`Error fetching user: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    logger.warn(`Invalid user ID: ${id}`);
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      logger.warn(`User not found: ${id}`);
      return res.status(404).json({ message: "User not found" });
    }

    logger.info(`User deleted: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting user: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const newFields = req.body;
  console.log(newFields);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    logger.warn(`Invalid user ID: ${id}`);
    return res.status(400).json({ message: "Invalid user ID" });
  }

  if (Object.keys(newFields).length === 0) {
    logger.warn("No fields provided for update");
    return res.status(400).json({ message: "Enter information to update" });
  }

  if (newFields.age && isNaN(Number(newFields.age))) {
    logger.warn("Invalid age provided");
    return res.status(400).json({ message: "Age must be a number" });
  }

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, newFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      logger.warn(`User not found: ${id}`);
      return res.status(404).json({ message: "User not found" });
    }

    logger.info(`User updated: ${id}`);
    res.status(200).json(updatedUser);
  } catch (error) {
    logger.error(`Error updating user: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    let { page = 1, limit = 5, search = "", sort } = req.query;

    // PAGINATION
    page = parseInt(page);
    limit = parseInt(limit);

    // SEARCHING
    const searchRegex = new RegExp(search, "i");

    // SORTING
    let sortOptions = {};
    if (sort) {
      if (sort.startsWith("-")) {
        const sortBy = sort.substring(1);
        sortOptions[sortBy] = -1;
      } else {
        sortOptions[sort] = 1;
      }
    }

    const users = await userModel
      .find({
        $or: [
          { first_name: { $regex: searchRegex } },
          { last_name: { $regex: searchRegex } },
        ],
      })
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    logger.info(`Fetched ${users.length} users`);
    res.status(200).json(users);
  } catch (error) {
    logger.error(`Error fetching users: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
