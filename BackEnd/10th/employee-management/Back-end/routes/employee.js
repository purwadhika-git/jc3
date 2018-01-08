const express = require("express");
const Employee = require("../models/employee");
const router = express.Router();

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

router.get("/", (req, res) => {

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
    
    let newObj = new Employee({
        name : req.body.name,
        address : req.body.address,
        phoneNumber : req.body.phoneNumber,
        salary : req.body.salary
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

module.exports = (function(){
    return router;
})();
