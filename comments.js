// Create web server
// Create a new comment
// Retrieve all comments
// Retrieve a single comment
// Update a single comment
// Delete a single comment

const express = require('express');
const router = express.Router();

// Import the Comment Model
const Comment = require('../models/Comment');

// @route   GET /comments
// @desc    Retrieve all comments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.json({ message: error });
  }
});

// @route   GET /comments/:id
// @desc    Retrieve a single comment
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (error) {
        res.json({ message: error });
    }
});

// @route   POST /comments
// @desc    Create a new comment
// @access  Public
router.post('/', async (req, res) => {
    const comment = new Comment({
        text: req.body.text,
    }); 
});