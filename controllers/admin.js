const axios = require('axios');
const { request } = require('express');
const { teacherToken } = require("../JWT");


exports.view = (req, res) => {
    axios.get(`http://www.mitch.redhawks.us/?all=true`).then(result => {
        const data = result.data;
        return res.render('adminView', {
            data
        });
    })
}

exports.givePerms = (req, res) => {

    const email = req.query.arr;

    axios.get(`http://www.mitch.redhawks.us/?user=${email}`).then(data => {
        // We now have the user data, now make a request to make them have perms
        let userData = data.data;

        axios.get(`http://www.mitch.redhawks.us/?permName=${userData.name}&permEmail=${userData.email}`).then(data => {

            if(data) {
                return res.json({"test": true})
            } else {
                return res.json({"test": false})
            }

        }).catch(err => {
            if(err) {
                console.log('err');
            }
        })

    }).catch(err => {
        if(err) {
            console.log('err');
            return res.json({"test": false})
        }
    })

}

exports.checklist = (req, res) => {

    // make a req to the databse to see if they are in the teacher list by getting there email from the email token, then compare it to the database email from teacher
    // if it is there create a token for them


    const email = req.cookies['email'];


    axios.get(`http://www.mitch.redhawks.us/?adminEmail=${email}`).then(results => {
        const answer = results.data;
        
        if(answer) {
            // create a token
            // redirect to add
            const accessToken = teacherToken(answer);

            res.cookie('perm-cookie', accessToken, {
                maxAge: 2592000000,
                httpOnly: true
            })


            res.redirect('/add');
        } else {
            // send to profile
            res.redirect('/profile');
        }

    })


    res.render('checklist');


}