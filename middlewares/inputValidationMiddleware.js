const { body, validationResult } = require('express-validator');

// this file is responsible for some Input validation rules for registering, login and adding a recipe using express validator
const validateRegistration = [
    body('username')
        .isString()
        .trim()
        .notEmpty().withMessage('Username is required.')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.')
        .escape(),
    body('password')
        .isString()
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateLogin = [
    body('username')
        .isString()
        .trim()
        .notEmpty().withMessage('Username is required.')
        .escape(),
    body('password')
        .isString()
        .notEmpty().withMessage('Password is required.')
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateRecipe = [
    body('name')
        .isString()
        .trim()
        .notEmpty().withMessage('Recipe name is required.')
        .escape(),
    body('ingredients')
        .isString()
        .notEmpty().withMessage('Ingredients are required.')
        .escape(),
    body('instructions')
        .isString()
        .notEmpty().withMessage('Instructions are required.')
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateRegistration,
    validateLogin,
    validateRecipe
};
