const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateRecipe } = require('../middlewares/inputValidationMiddleware');
const { encrypt, decrypt } = require('../utils/cryptoUtils');
const { users } = require('../models/userModel');

const router = express.Router();

// Add Recipe
router.post('/', authenticateToken, validateRecipe, (req, res) => {
    const userId = req.userId;
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const { name, ingredients, instructions } = req.body;
    // Encryption of Secret recipes
    const encryptedIngredients = encrypt(ingredients);
    const decryptedIngredients = decrypt(encryptedIngredients);
    const encryptedInstructions = encrypt(instructions);

    const recipe = { id: Date.now().toString(), name, ingredients: encryptedIngredients, instructions: encryptedInstructions };
    user.recipes.push(recipe);

    res.status(201).json({ message: 'Recipe added successfully' });
});

// Get recipes
router.get('/', authenticateToken, (req, res) => {
    const userId = req.userId;
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Decryption of Secret recipes
    const decryptedRecipes = user.recipes.map(recipe => ({
        ...recipe,
        ingredients: decrypt(recipe.ingredients),
        instructions: decrypt(recipe.instructions),
    }));

    res.json(decryptedRecipes);
});

module.exports = router;
