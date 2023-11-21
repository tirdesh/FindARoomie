// Importing the express and controller functions.
import express from 'express';
import * as userController from '../controllers/UserManagement-controller.js';

const router = express.Router();

// New user
router.post('/api/signup', userController.createUser);

// User login
router.post('/api/login', userController.loginUser);

// Reset password
router.post('/api/password-reset', userController.resetPassword);

export default router;
