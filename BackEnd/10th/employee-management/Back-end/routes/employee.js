const express = require("express");
const Employee = require("../models/employee");
const router = express.Router();

module.exports = function(passport){


    // router.use(passport.authenticate("auth", { session : false }), (req, res, next) => {
    //     next();
    // })

    router.get("/:id", (req, res) => {
    
        Employee.findById(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    
    });
    
    router.get("/", passport.authenticate("auth", { session : false }), (req, res) => {
    
        Employee.find({}, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    });
    
    router.post("/", (req, res) => {
    
    
        if (!req.files.profile) {
            return res.status(400).send("No files were uploaded");
        }
    
        let image = req.files.profile;
        let date = new Date();
        let imageName = date.getTime() + ".png"
    
        image.mv("./public/profile/" + imageName, (error) => {
            
            if (error) return res.status(500).send(error);
            
            let newObj = new Employee({
                name : req.body.name,
                address : req.body.address,
                phoneNumber : req.body.phoneNumber,
                salary : req.body.salary,
                profile : "http://localhost:3000/profile/" + imageName
            });
            
            newObj.save((error) => {
                if (error) {
                    res.status(500).send(error);
                }
                else{
                    res.json(newObj);
                }
            });
    
        });
    
    });
    
    router.delete("/:id", (req, res) => {
    
        Employee.findByIdAndRemove(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json({ message : "Data deleted" })
            }
        });
        
    });
    
    router.put("/", (req, res) => {
        
        let newObj = {
            name : req.body.name,
            address : req.body.address,
            phoneNumber : req.body.phoneNumber,
            salary : req.body.salary
        };
    
        Employee.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else {
                res.status(500).json({ message : "Data updated" })
            }
        });
    
    });

    return router;
};
