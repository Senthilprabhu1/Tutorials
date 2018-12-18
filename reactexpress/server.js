const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
//const cookieparser = require('cookie-parser');
const users = require('./route/api/users');
//app.use(cookieparser());

app.use(bodyParser.urlencoded({ extended:false}));

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true }, (err, database) => {
    if(err)
        return console.error(err);

    const port = 5000;

    app.listen(port, () => console.log(`Listening on port ${port}`));

});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);




app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    
    db.collection('login').findOne({ email },(err, user) =>{
        console.log(user);              
        if(err){
            console.error(err);
            res.status(500).json({
                error : 'Internal error'
            });
            
        }
        else if(!user){
            res.status(401)
            .json({
                error : 'Invalid username or password'
            });
        }
        else{
            user.isCorrectPassword(password,(err, res) => {
                if(err){
                    res.status(500)
                    .json({
                        error : 'Internal error'
                    });
                }
                else if(!same){
                    res.status(402)
                    .json({
                        error : 'Invalid Password'
                    });
                }
                else{
                    const payload = {email};
                    const token = jwt.sign(payload, secret, {
                        expiresIn : '1hr'
                    });
                    res.cookie('token', token, {httpOnly : true}).sendStatus(200);
                }
            });
        }
        
    });
});


