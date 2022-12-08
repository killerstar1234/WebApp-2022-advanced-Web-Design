const axios = require('axios');
const { request, json } = require('express');
const { teacherToken } = require("../JWT");
const path = require('path');


exports.view = (req, res) => {


    axios.get(`http://www.mitch.redhawks.us/?all=true`).then(result => {
        const data = result.data;

        axios.get('http://www.mitch.redhawks.us/?teachers=true').then(teachers => {
            const teacherArr = teachers.data;
            return res.render('adminView', {
                data: data,
                teachers: teacherArr
            });

        })


    
    
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

exports.takePerms = (req, res) => {
    
    const email = req.query.email;

    axios.get(`http://www.mitch.redhawks.us/?takeAwayEmail=${email}`).then(() => {
        return res.json(1);
    }).catch(err => {
        if(err) {
            console.log(err);
        }
    })

}