const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.route('/').get(postController.get_post).post(postController.create_post);

router
  .route('/:id')
  .get(postController.get_postindex)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
