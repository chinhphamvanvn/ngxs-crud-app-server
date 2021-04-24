const { Router } = require('express');
const router = Router();

const { getCourses, getCourseById, createCourses, deleteCourses, updateCourses } = require('../controllers/index.controller');

router.get('/api/courses', getCourses);
router.get('/api/courses/:id', getCourseById);
router.post('/api/courses', createCourses);
router.delete('/api/courses/:id', deleteCourses);
router.put('/api/courses/:id', updateCourses);


module.exports = router;