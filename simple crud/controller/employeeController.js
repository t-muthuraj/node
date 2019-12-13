const employeeService = require('../services/employeeService');

let logger  = require('../log/logger')
module.exports.getEmployee = function(req, res){
    logger.info('aaa')
    employeeService.getEmployee(function(response){
        res.json(response)
    })
}

module.exports.postEmployee = function(req, res){
    console.log('aaaa', req.body)
    employeeService.postEmployee(req, function(response){
        res.json(response)
    });
}

module.exports.getEmployeeById = function(req, res){
    employeeService.getEmployeeById(req, function(response){
        res.json(response)
    });
}

module.exports.deleteEmployeeById = function(req, res){
    employeeService.deleteEmployeeById(req, function(response){
        res.json(response)
    });
}

module.exports.generateToken = function(req, res){
    employeeService.generateToken(req, function(response){
        res.json(response)
    });
}

module.exports.updateEmployee = function(req, res){
    employeeService.updateEmployee(req, function(response){
        res.json(response)
    });
}