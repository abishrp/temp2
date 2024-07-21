const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTaskById, updateTask, deleteTask, sendTaskSummary } = require('../controllers/taskController');
const { authenticate } = require('../middleware/authMiddleware');
const { validateTask } = require('../middleware/validationMiddleware');

router.post('/', authenticate, validateTask, createTask);
router.get('/', authenticate, getTasks);
router.get('/:id', authenticate, getTaskById);
router.put('/:id', authenticate, validateTask, updateTask);
router.delete('/:id', authenticate, deleteTask);
router.post('/email', authenticate, sendTaskSummary);

module.exports = router;
