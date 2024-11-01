require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./controllers/authController');
const recipeRoutes = require('./controllers/recipeController');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

module.exports = app;
