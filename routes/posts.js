const express = require('express');

const postController = require('../controllers/posts')

const router = express.Router();

router.get('/home', postController.find)
router.get('/posts/:title', postController.findOne)

module.exports = router;