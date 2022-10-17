// Real Code for login goes here
const db = require('../config/config');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { createToken } = require("../JWT");

exports.login = async (req, res) => {

const { name, email, password } = req.body;


db.query('SELECT * FROM user WHERE email = ?', [req.body.email], (err, emailQuery) => {


    if(err) {
        console.log(err);
        return res.render('login', {
            message: 'An error occured, try again'
        })
    }

    if(emailQuery.length <= 0) {
        return res.status(400).render('login', {
            message: 'Email Not Found'
        })
    } else if(name !== emailQuery[0].name) {
        return res.status(400).render('login', {
            message: 'Incorrect Name'
        })
    } else {

        const dbPass = emailQuery[0].password;
        bcrypt.compare(password, dbPass).then(match => {
            
            if(!match) {
                res.status(400).render('login', {
                    message: 'Incorrect Password'
                })
            } else {

                const tokenData = {name: emailQuery[0].name, email: emailQuery[0].email};
                const accessToken = createToken(tokenData);

                res.cookie('access-token', accessToken, {
                    maxAge: 2592000000,
                    httpOnly: true
                })

                return res.status(200).render('profile')

            }
        
        })

    }

})

}

exports.register = (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT * FROM user WHERE email = ?', [email], async (err, emailQuery) => {
        
        if(err) {
            return res.status(400).render('register', {
                message: 'An error occured, try again'
            })
        }

        if(emailQuery.length > 0) {
            return res.status(400).render('register', {
                message: 'That Email is Already in use'
            })
        } else if(password != passwordConfirm) {
            return res.status(400).render('register', {
                message: 'The Passwords Do Not Match'
            })
        }

            const hashPass = await bcrypt.hash(password, 8);

            db.query('INSERT into user SET ?', {email: email, name: name, password: hashPass}, (err, result) => {
                
                if(err) {
                    return res.status(400).render('login', {
                        message: 'An error occured, try again'
                    })
                } else {
                    const tokenData = {name: name, email: email};
                    const accessToken = createToken(tokenData)

                    res.cookie('access-token', accessToken, {
                        maxAge: 2592000000,
                        httpOnly: true
                    })

                    return res.status(200).render('profile')

                }
            
            })

        })

}

exports.logout = (req, res) => {
    const accessToken = req.cookies['access-token'];
    if(accessToken) {

        res.status(200).render('login');        
        return res.clearCookie('access-token');

    } else {
        return res.status(400).render('login', {
            message: 'Need To Have a account to view this'
        })
    }
}