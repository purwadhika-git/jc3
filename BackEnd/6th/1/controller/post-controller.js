const express = require("express");

const router = express.Router();

router.post("/post/add", (req, res) => {
    res.send(req.body);
});

router.post("/post/upload", (req, res) => {
    
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

router.get("/post/get", (req, res) => {
    res.send("Get Post");
});


module.exports = (function(){
    return router;
})();