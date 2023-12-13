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

// Add posted List
router.put('/api/addPost', userController.addPostedList);

// add wishList To post 
router.put('/api/wishlist', userController.addWishlist);


router.get('/api/:loginId', userController.getUser);

export default router;
