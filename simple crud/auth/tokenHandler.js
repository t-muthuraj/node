let jwt  = require('jsonwebtoken')

module.exports.verifyToken = function(token){
    jwt.verify(token, 'secret');
    return true
 
}