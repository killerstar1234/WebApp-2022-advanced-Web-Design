const path = require('path');
const axios = require('axios');
const bcrypt = require('bcryptjs');
// nchsSTAFF
// NCHS2026v2022

exports.login = async (req, res) => {
    
    // check with the database, if it is correct send the file if not return the page there on

    axios.get(`http://www.mitch.redhawks.us?adminEmail=${req.body.email}`).then(results => {
        
    console.log(results);
    
})

    return res.sendFile(path.join(__dirname, '../views/add.html'));


}

exports.subject = (req, res) => {

    const catigory = req.body.catigory.split(' ').join('').toLowerCase();
    const email = req.body.email;
    const name = req.body.name;

    // Add This to the database...


    axios.get(`http://www.mitch.redhawks.us?teacherEmail=${email}&teacherName=${name}&cat=${catigory}`).then(results => {

        return res.json({"message": "Added to Database, Press Search button to add another subject to your profile!"})

    }).catch(err => {
        if(err) {
            res.status(400).render('error');
        }
    })

}