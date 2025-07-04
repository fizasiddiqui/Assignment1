const userModel = require("../models/user");

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        res.status(200).json({
            message: "All users fetched",
            allUsers
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User fetched", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created", newUser });
    } catch (error) {
        res.status(400).json({ message: "Error creating user", error });
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated", updatedUser });
    } catch (error) {
        res.status(400).json({ message: "Error updating user", error });
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted", deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};