const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controllers/postControllers');
const { protect, allowRoles } = require('../auth/rbac');

router.post('/', protect, allowRoles('user', 'admin'), createPost);
router.get('/', protect, getPosts);

module.exports = router;
