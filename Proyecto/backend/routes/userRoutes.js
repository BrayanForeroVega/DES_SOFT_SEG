const userController = require('../controllers/userController');
const passport = require('passport');
module.exports = (app) => {
     app.get('/api/users',  passport.authenticate('jwt', { session: false }),userController.getAllUsers);
     app.get('/api/users/:id', passport.authenticate('jwt', { session: false }), userController.getUserById);
     app.post('/api/users/create', passport.authenticate('jwt', { session: false }), userController.register); 
     app.put('/api/users/update', passport.authenticate('jwt', { session: false }), userController.getUserUpdate);
     app.delete('/api/users/delete/:id', passport.authenticate('jwt', { session: false }), userController.getUserDelete);
     app.post('/api/users/login', userController.login);
}