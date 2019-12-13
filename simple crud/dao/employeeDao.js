let Employee = require('../models/Employee');
const jwt = require('jsonwebtoken')


module.exports.getEmployee = function(callback){
    Employee.find(function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    })
}

module.exports.postEmployee = function(req, callback){
    let employee = new Employee(req.body);
    employee.save(function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.generateToken = function(req, callback){
    console.log("---", req.body)
    Employee.findOne({'email':req.body.email}, function(err, response){
        console.log("000", response)
        if(response){
            const token = jwt.sign({_id: response.email}, 'secret')
            callback(token)
        }else if(err){
            callback(err)
        }else{
            callback({ message: "Invalid Email" });
        }
    })
}

module.exports.getEmployeeById = function(req, callback){
    Employee.findById( req.params.id , function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.deleteEmployeeById = function(req, callback){
    Employee.findByIdAndDelete( req.params.id , function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.updateEmployee = function(req, callback){
    console.log("In Dao update", req.params.id)
    Employee.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone
    }, function(err, response){
        console.log("===update", response)
       if(err){
           callback(err);
       }
       callback(response)
    });
}