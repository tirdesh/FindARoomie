import User from '../model/UserManagement.js';

// Service to list all users
export const listUsers = async (params = {}) => {
    return await User.find(params).exec();
};

// Service to create a new user
export const createUser = async (userData) => {
    if (await User.findOne({ email: userData.email }).exec() || await User.findOne({ userId: userData.userId }).exec()) {
        throw new Error('Email or Username already in use');
    }

    const user = new User(userData);
    return await user.save();
};

// Service to find user by ID
export const findUserById = async (userId) => {
    const user = await User.findOne({userId}).exec();
    if(!user){
        throw new Error('User does not exists');
    }
    return user;
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

    return user;
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

