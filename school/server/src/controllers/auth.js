const bcrypt = require("bcrypt");

//const User = require("../models/user");

async function postRegister(req, res, next) {
    /*
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    date = year + "-" + month + "-" + date;
    const time = hours + ":" + minutes + ":" + seconds;

    const [user, created] = await User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            fullname: req.body.fullname,
            password: bcrypt.hashSync(req.body.password, 12),
            date: date,
            time: time,
        },
    });

    if (created) {
        userMessage = user;
    } else {
        userMessage = "User already exist";
    }
    res.send(userMessage);
    */
    res.status(201).json({
        message: 'Register route seems to working',
        userData: req.body
    });
}

async function postLogin(req, res, next) {
    res.send('Login route working');
}

/*
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
*/
module.exports = {
    postRegister,
    postLogin
}
