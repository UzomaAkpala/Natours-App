const express = require('express');
const useController = require('../controllers/userController');

const { getAllUsers, createUser, getUser, updateUser, deleteUser } =
  useController;

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
