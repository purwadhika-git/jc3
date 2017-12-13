const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const postController = require("./controller/post-controller")
const commentController = require("./controller/comment-controller")

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());

app.post('/upload', function (req, res) {
    
    if (!req.files){
        return res.status(400).send('No files were uploaded.');
    }

    let image = req.files.gambar;

    image.mv('./public/image.png', function(err) {
        if (err){
            return res.status(500).send(err);
        }
        res.send('File uploaded! ');
    });

});

app.use("/api", postController);
app.use("/api", commentController);

app.listen(3000);