import User from '../model/UserManagement.js';

// Service to list all users
export const listUsers = async (params = {}) => {
    return await User.find(params).exec();
};

// Service to create a new user
export const createUser = async (userData) => {
    const userExists = await User.findOne({ email: userData.email }).exec();
    if (userExists) {
        throw new Error('Email already in use');
    }

    const user = new User(userData);
    return await user.save();
};

// Service to find user by ID
export const findUserById = async (userId) => {
    return await User.findOne({userId}).exec();
};

// Service to update user details
export const updateUser = async (userId, updatedData) => {
    return await User.findByIdAndUpdate(userId, updatedData, { new: true }).exec();
};

// Service for user login
export const loginUser = async (email, password) => {
    const user = await User.findOne({ email }).exec();
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid email or password');
    }

    return user.generateAuthToken();
};

// Service to reset user password
export const resetUserPassword = async (userId, newPassword) => {
    const user = await User.findOne({userId}).exec();
    if (!user) {
        throw new Error('User not found');
    }

    await user.resetPassword(newPassword);
    return await user.save();
};

