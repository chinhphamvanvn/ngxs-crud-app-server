const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345678',
    database: 'courses',
    port: '5432'
});

const getCourses = async (req, res) => {
    const response = await pool.query('SELECT * FROM course');
    res.status(200).json(response.rows);
};

const getCourseById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM course WHERE id = $1', [id]);
    res.json(response.rows);
};

const createCourses = async (req, res) => {
    const { name, description } = req.body;
    const response = await pool.query('INSERT INTO course (name, description) VALUES ($1, $2)', [name, description]);
    res.json({
        message: 'Courses Added Succesfully',
        course: { name, description }
    })
};

const updateCourses = async (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    const response = await pool.query('UPDATE course SET name = $1, description  = $2 WHERE id= $3', [
        name,
        description,
        id
    ]);
    res.json({
        message: 'Courses Updated Succesfully',
        course: { name, description }
    })
};

const deleteCourses = async (req, res) => {
    const id = req.params.id;
    const response = pool.query('DELETE FROM course WHERE id = $1', [id]);
    res.json(`User ${id} deleted successfully`);
};

module.exports = {
    getCourses,
    getCourseById,
    createCourses,
    deleteCourses,
    updateCourses
}