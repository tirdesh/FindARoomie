import { response } from 'express';
import * as userServices from '../services/usermanagementServices.js';
import { setResponse, setConflictResponse, setUnauthorizedResponse, setErrorResponse } from './response-handler.js';

// User Signup
export const createUser = async (request, response) => {
    try {
        const userData = { ...request.body };
        const newUser = await userServices.createUser(userData);
        setResponse(newUser, response, 201, 'User created successfully');
    } catch (err) {
        if (err.message === 'Email or Username already in use') {
            setConflictResponse('Email or Username already in use', response);
        } else {
            setErrorResponse(err, response);
        }
    }
};



// User Login
export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        //console.log(email,password);
        const token = await userServices.loginUser(email, password);
        setResponse({ token }, response, 200, 'Login successful');
    } catch (err) {
        if (err.message === 'Invalid login credentials') {
            setUnauthorizedResponse('Invalid login credentials', response);
        }
        else {
            setErrorResponse(err, response);
        }
    }
};

// Reset Password for the user
export const resetPassword = async (request, response) => {
    try {
        const { userId, newPassword } = request.body;
        await userServices.resetUserPassword(userId, newPassword);
        setResponse({}, response, 200, 'Password reset successfully');
    } catch (err) {
        setErrorResponse(err, response);
    }
};

export const getUser = async (request, response)=> {
    try{
        const userId = request.params.loginId;
        const userData = await userServices.findUserById(userId);
        setResponse(userData, response, 200, 'Found User');
        
    } catch (err){
        setErrorResponse(err, response);
    }
};

