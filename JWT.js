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
    const permCookie = req.cookies['perm-cookie'];

    if(!permCookie) {
        // If you dont have the cookie

        const email = req.cookies['email'];


        axios.get(`http://www.mitch.redhawks.us/?adminEmail=${email}`).then(results => {
            const answer = results.data;
            
            if(answer) {
                // create a token
                // redirect to add
                const accessToken = teacherToken(answer);

                // Need To set this cookie so the can have access
                res.cookie('perm-cookie', accessToken, {
                    maxAge: 2592000000,
                    httpOnly: true
                })
    
    
                return res.redirect('/add');
            } else {
                // send to profile
                res.render('profile', {
                    message: "You dont have access"
                });
            }
    
        })
    
    
    } else {


    try {
        // If you do try and varifiy it
        const validToken = verify(permCookie, 'teacherPerm2026');
        if(validToken) {
            req.authenticated = true;
            return next();
        }
    } catch(err) {
        
        if(err) {
            res.render('profile', {
                message: "You dont have access to this"
            });
        }
}
}
}

/* Teacher/Admin Tokens */

module.exports = { createToken, validateToken, teacherToken, validateTeacherToken }