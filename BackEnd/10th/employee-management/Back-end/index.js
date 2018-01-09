const express = require("express");
const bodyParser = require("body-parser")
const employeeRoutes = require("./routes/employee");
const fileUpload = require("express-fileupload");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static('public'));

app.post("/upload", (req, res) => {

    console.log(req.body.name);

    if (!req.files.gambar) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.gambar;

    // let ext = image.name.split(".")[1];
    // console.log(ext);

    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/" + imageName, (error) => {

        if (error) return res.status(500).send(error);

        res.json({ path : "http://localhost:3000/" + imageName})

    });

});


app.use("/api/employee", employeeRoutes);

app.listen(3000);
