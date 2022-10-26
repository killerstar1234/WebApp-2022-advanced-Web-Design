// Real Code for login goes here
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { createToken } = require("../JWT");
const axios = require('axios');

exports.login = async (req, res) => {

const { name, email, password } = req.body;

axios.get(`http://www.mitch.redhawks.us?login=${email}`).then(responce => {

    if(responce.data) {

        let data = responce.data;
        
        // We have the login database username, password, and email...
        if(name !== data.name) {
            return res.status(400).render('login', {
                message: 'Name Does not match Login'
            })
        } else {

        const dbPass = data.password;
        bcrypt.compare(password, dbPass).then(match => {
            
            if(!match) {
                res.status(400).render('login', {
                    message: 'Incorrect Password'
                })
            } else {

                const tokenData = {name: data.name, email: data.email};
                const accessToken = createToken(tokenData);

                res.cookie('access-token', accessToken, {
                    maxAge: 2592000000,
                    httpOnly: true
                })
                res.cookie('email', email, {
                    maxAge: 2592000000,
                    httpOnly: true
                })

                return res.status(200).render('profile')

            }
        
        })

        }


    } else {
        return res.render('login', {
            message: 'Email Not Found'
        })
    }

}).catch(err => {
    if(err) {
        console.log(err);
        return res.status(400).render('login', {
            message: 'Try Again later, there was a error'
        })
    }
})

// HOW YOU WOULD DO IT WITHOUT THE PHP API AND JUST A JS DATABASE:

// db.query('SELECT * FROM user WHERE email = ?', [req.body.email], (err, emailQuery) => {


//     if(err) {
//         console.log(err);
//         return res.render('login', {
//             message: 'An error occured, try again'
//         })
//     }

//     if(emailQuery.length <= 0) {
//         return res.status(400).render('login', {
//             message: 'Email Not Found'
//         })
//     } else if(name !== emailQuery[0].name) {
//         return res.status(400).render('login', {
//             message: 'Incorrect Name'
//         })
//     } else {

//         const dbPass = emailQuery[0].password;
//         bcrypt.compare(password, dbPass).then(match => {
            
//             if(!match) {
//                 res.status(400).render('login', {
//                     message: 'Incorrect Password'
//                 })
//             } else {

//                 const tokenData = {name: emailQuery[0].name, email: emailQuery[0].email};
//                 const accessToken = createToken(tokenData);

//                 res.cookie('access-token', accessToken, {
//                     maxAge: 2592000000,
//                     httpOnly: true
//                 })

//                 return res.status(200).render('profile')

//             }
        
//         })

//     }

// })

}

exports.register = (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    if(password !== passwordConfirm) {
        return res.status(400).render('register', {
            message: 'Passwords Do Not Match'
        })   
    } else {

    axios.get(`http://www.mitch.redhawks.us?register=${email}`).then( async (responce) => {

        if(!responce.data) {

            // You Can Make a account 

            const hashPass = await bcrypt.hash(password, 8);

            axios.post('http://www.mitch.redhawks.us/', {
                name: name, 
                email: email,
                password: hashPass
            }).then(result => {

                    const tokenData = {name: name, email: email};
                    const accessToken = createToken(tokenData)

                    res.cookie('access-token', accessToken, {
                        maxAge: 2592000000,
                        httpOnly: true
                    })
                    res.cookie('email', email, {
                        maxAge: 2592000000,
                        httpOnly: true
                    })

                    return res.status(200).render('profile', {
                        message: result.message
                    })

            }).catch(err => {
                if(err) {
                    console.log(err);
                    return res.status(400).render('register', {
                        message: "Try again later, there was a error"
                    })
                }
            })

        } else {
            return res.status(400).render('register', {
                message: 'That Email Is already in use'
            })
        }

    }).catch(err => {
        if(err) {
            console.log(err);
            return res.status(400).render('register', {
                message: 'Try Again Later, There was a Error'
            })
        }
    })

}

    // HOW YOU WOULD DO IT WITHOUT THE PHP API AND JUST A JS DATABASE:

    // db.query('SELECT * FROM user WHERE email = ?', [email], async (err, emailQuery) => {
        
    //     if(err) {
    //         return res.status(400).render('register', {
    //             message: 'An error occured, try again'
    //         })
    //     }

    //     if(emailQuery.length > 0) {
    //         return res.status(400).render('register', {
    //             message: 'That Email is Already in use'
    //         })
    //     } else if(password != passwordConfirm) {
    //         return res.status(400).render('register', {
    //             message: 'The Passwords Do Not Match'
    //         })
    //     }

    //         const hashPass = await bcrypt.hash(password, 8);

    //         db.query('INSERT into user SET ?', {email: email, name: name, password: hashPass}, (err, result) => {
                
    //             if(err) {
    //                 return res.status(400).render('login', {
    //                     message: 'An error occured, try again'
    //                 })
    //             } else {
    //                 const tokenData = {name: name, email: email};
    //                 const accessToken = createToken(tokenData)

    //                 res.cookie('access-token', accessToken, {
    //                     maxAge: 2592000000,
    //                     httpOnly: true
    //                 })

    //                 return res.status(200).render('profile')

    //             }
            
    //         })

    //     })

}

exports.logout = (req, res) => {
    const accessToken = req.cookies['access-token'];
    if(accessToken) {
        res.clearCookie('access-token');       
        return res.redirect('/login');

    } else {
        return res.status(400).render('login', {
            message: 'Need To Have a account to view this'
        })
    }
}