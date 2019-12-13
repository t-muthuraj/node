const express = require('express');

const apiRouter = express.Router();

let employeeController = require('../controller/employeeController');


apiRouter.get('/employee', employeeController.getEmployee);
apiRouter.post('/employee', employeeController.postEmployee);
apiRouter.delete('/employee/:id', employeeController.deleteEmployeeById);
apiRouter.get('/employee/:id', employeeController.getEmployeeById);
apiRouter.post('/token', employeeController.generateToken);
apiRouter.put('/employee/:id', employeeController.updateEmployee);

module.exports = apiRouter;