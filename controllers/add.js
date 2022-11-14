const path = require('path');
const axios = require('axios');
const bcrypt = require('bcryptjs');
// nchsSTAFF
// NCHS2026v2022

exports.login = async (req, res) => {
    
    const { username, password } = req.body;

    axios.get(`http://www.mitch.redhawks.us?login=${username}`).then(async results => {
        // results here
        if(results.data) {
                
        const data = results.data;

            if(username != data.email) {
                return res.render('add', {
                    message: 'Username Is Incorrect'
                })
            } else if(data.email != data.name) {
                return res.render('add', {
                    message: 'There Was a Err'
                })
            } else {

            const dbPass = results.data.password;
            bcrypt.compare(password, dbPass).then(match => {
                
                if(!match) {
                    res.status(400).render('add', {
                        message: 'Incorrect Password'
                    })
                } else {
    
                    return res.sendFile(path.join(__dirname, '../views/add.html'));
    
                }
            
            })
        }
        
        } else {
            return res.render('add', {
                message: 'No User Found'
            });
        }

    }).catch(err => {
        if(err) {
            console.log('err');
            return res.render('add');
        }
    })


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