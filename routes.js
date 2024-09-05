const express = require('express')
const mongoose = require('mongoose');
const animals = require('../models/animal');
const db = require('./db');

const routes = express.Router();

routes.get('/animais', async (req, res) => {
  try {
    const animais = await animals.find();
    res.status(200).json(animais);
  } catch (error) {
    res.status(500).json({ error: error })
  }
});






module.exports = routes;