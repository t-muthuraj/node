const employeeDao = require('../dao/employeeDao');

module.exports.getEmployee = function(callback){
    employeeDao.getEmployee(function(response){
        callback(response);
    })
}

module.exports.postEmployee = function(req, callback){
    console.log("In service")
    employeeDao.postEmployee(req, function(response){
        callback(response);
    })
}

module.exports.generateToken = function(req, callback){
    console.log("In service")
    employeeDao.generateToken(req, function(response){
        callback(response);
    })
}

module.exports.deleteEmployeeById = function(req, callback){
    employeeDao.deleteEmployeeById(req, function(response){
        callback(response);
    })
}

module.exports.getEmployeeById = function(req, callback){
    employeeDao.getEmployeeById(req, function(response){
        callback(response);
    })
}

module.exports.updateEmployee = function(req, callback){
    console.log("In servise updae")
    employeeDao.updateEmployee(req, function(response){
        callback(response);
    });
}