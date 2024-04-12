const { Router } = require('express');
const router = Router();
const {getUsers, createUser, getUserById, deleteUserById, putUserById } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById );
router.post('/users', createUser );
router.delete('/users/:id', deleteUserById );
router.put('/users/:id', putUserById );

module.exports = router;