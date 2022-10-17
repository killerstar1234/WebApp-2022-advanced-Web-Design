const express = require('express');
const router = express.Router();
const db = require('../config/config');

router.get('/listOfTeachers', (req, res) => {

let results = [[], []];

db.query('SELECT teacherEmail, teacherFirst FROM teacher_list', (err, teachers) => {
// Add index for teacher First
    teachers.forEach(teacher => {
        results[0].push({teacherEmail: teacher.teacherEmail, teacherName: teacher.teacherFirst});
    })

    db.query('SELECT subjects.teacherEmail, subject FROM teacher_list, subjects WHERE subjects.teacherEmail = teacher_list.teacherEmail', (err, data) => {

        data.forEach(obj => {
            results[1].push({teacherEmail: obj.teacherEmail, subject: obj.subject})
        })

        console.log(results);

        return res.json(results);

    })

})

})

module.exports = router;