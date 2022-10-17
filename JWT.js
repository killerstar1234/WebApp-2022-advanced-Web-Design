const {sign, verify} = require('jsonwebtoken');

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

module.exports = { createToken, validateToken }