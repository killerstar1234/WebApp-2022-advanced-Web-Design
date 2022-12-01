const {sign, verify} = require('jsonwebtoken');

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
    const accessToken = sign({name: teacher.name, email: user.email}, 'teacherPerm2026');
    return accessToken;
}

const validateTeacherToken = (req, res, next) => {
    const accessToken = req.cookies['perm-cookie'];

    if(!accessToken) {
        return res.status(400).render('profile', {
            message: "Contact The Owner about Getting A Spot to teacher"
        })
    }

    try {
        const validToken = verify(accessToken, 'teacherPerm2026');
        if(validToken) {
            req.authenticated = true;
            return next();
        }
    } catch(err) {
        return res.status(400).render('profile', {
            message: "Invalid Token"
        })
    }

}

/* Teacher/Admin Tokens */

module.exports = { createToken, validateToken, teacherToken, validateTeacherToken }