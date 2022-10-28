const { json } = require('express');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');


app.use(express.static('./public'))
app.use('/js', express.static('./public'));

app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'))
app.use('/add', require('./routes/add'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Running on Port 3000...")
})