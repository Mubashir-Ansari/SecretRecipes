const express = require('express');
const { validateRegistration, validateLogin } = require('../middlewares/inputValidationMiddleware');
const { hashPassword, verifyPassword, generateToken } = require('../services/authService');
const { users } = require('../models/userModel');

const router = express.Router();

// Registration user
router.post('/register', validateRegistration, async (req, res) => {
    const { username, password } = req.body;
    // check existing username
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    
    const passwordHash = await hashPassword(password);
    // storing user data 
    const user = { id: Date.now().toString(), username, passwordHash, recipes: [] };
    users.push(user);
    
    res.status(201).json({ message: 'User registered successfully' });
});

// Login user
router.post('/login', validateLogin, async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    // jwt token generation
    const token = generateToken(user.id);
    res.json({ token });
});

module.exports = router;
