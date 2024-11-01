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
    const encryptedIngredients = encrypt(ingredients);
    console.log('encrypted Ingredients: ',encryptedIngredients)
    const decryptedIngredients = decrypt(encryptedIngredients);
    console.log('decrypted Ingredients: ',decryptedIngredients)
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
    const decryptedRecipes = user.recipes.map(recipe => ({
        ...recipe,
        ingredients: decrypt(recipe.ingredients),
        instructions: decrypt(recipe.instructions),
    }));

    res.json(decryptedRecipes);
});

module.exports = router;
