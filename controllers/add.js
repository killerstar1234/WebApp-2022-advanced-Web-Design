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
    
                    console.log('Sucksess')
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