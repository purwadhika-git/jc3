const express = require("express");
const bodyParser = require("body-parser")
const employeeRoutes = require("./routes/employee");
const userRoutes = require("./routes/user");
const fileUpload = require("express-fileupload");

const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

const jwt = require("jsonwebtoken");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static('public'));
app.use(passport.initialize());

passport.use("auth", new BearerStrategy((token, done) => {
    jwt.verify(token, "secretkey", (error, decoded) => {

        if (error) {
            return done("User Not Authorized", null);
        }
        else{
            return done(null, decoded);
        }

    })

}));

app.post("/data", passport.authenticate("auth", { session : false }), (req, res) => {
    //res.send("Berhasil");
    res.json(req.user);
});

app.post("/login", (req, res) => {

    if (req.body.username == "user" && req.body.password == "abc123") {

        const payload = {
            id : "USR10012018",
            name : "user"
        };

        const token = jwt.sign(payload, "secretkey", { expiresIn : 30 });

        res.json({ token : token});
    }
    else{
        res.status(404).json({ message : "User not found !"});
    }

})


app.use("/api/employee", employeeRoutes);
app.use("/api/user", userRoutes);

app.listen(3000);
