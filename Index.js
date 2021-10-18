const express = require("express");
const connectionString = require("./config.js");
const passport = require("passport");



const passportJwt = require("passport-jwt");

const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

const config = require("./config");

const bookRepository = require("./repository/bookRepository");
const accountRepository = require("./repository/accountRepository");
const accountService = require("./Service/accountService");

const bookController = require("./Controller/bookController");

const options = {
    jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
    secretOrKey: config.secret,
};

//what is passport jwt? function is called whenever someone makes request to server and want to be authenticated. We get the
//decoded jwt from their server, there is a username inside. whihc we check from our table, from account table and check whether it exists

passport.use(
    new passportJwt.Strategy(options, function (decodedJwt, next) {
        const username = decodedJwt.username;

        accountRepository
            .doesUsernameExist(username)
            .then((exists) => {
                if (exists) {
                    next(null, username);
                } else {
                    next(null, false);
                }
            })
            .catch(function (error) {
                next(error, false);
                console.error(error);
            });
    })
);

app.use(passport.initialize());

app.use("/",bookController);

app.get("/login", (request, response) => {
    const username = request.query.username;
    const password = request.query.password;
    console.log(username, password);

    accountService
    .canUserLogin(username,password)
        .then((token) => {
            if (token) {
                response.send({
                    message: "hello",
                    token:token
                });
            } else {
                response.status(400).send({
                    errors: "combination of username and password are wrong",
                });
            }
        })
        .catch(function (error) {
            response.status(500);
            console.error(error);
        });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
