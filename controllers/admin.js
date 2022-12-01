const axios = require('axios');

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