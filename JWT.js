const {sign, verify} = require('jsonwebtoken');
const axios = require('axios');

/* User tokens */
const createToken = (user) => {
    const accessToken = sign({name: user.name, email: user.email}, 'nchs2026')
    return accessToken;
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];

    if(!accessToken) {
        return res.status(400).render('login', {
            message: 'You Need a acount to view this'
        })
    }

    try {
        const validToken = verify(accessToken, 'nchs2026');
        if(validToken) {
            req.authenticated = true;
            return next();
        }
    } catch(err) {
        return res.status(400).render('login', {
            message: "Invalid Token"
        })
    }

}
/* User tokens */

/* Teacher/Admin Tokens */

const teacherToken = (teacher) => {
    const accessToken = sign({name: teacher.name, email: teacher.email}, 'teacherPerm2026');
    return accessToken;
}

const validateTeacherToken = (req, res, next) => {

    const email = req.cookies['email'];


        axios.get(`http://www.mitch.redhawks.us/?adminEmail=${email}`).then(results => {
            const answer = results.data;
            
            if(answer) {
                req.authenticated = true;
                return next();
            } else {
                // send to profile
                return res.status(400).render('profile', {
                    message: "You dont have access"
                });
            }
    
        }).catch(err => {
            if(err) {
                return res.status(400).render('profile', {
                    message: "Try to Log out and Log back in"
                })
            }
        })
    
}

/* Teacher/Admin Tokens */

module.exports = { createToken, validateToken, teacherToken, validateTeacherToken }