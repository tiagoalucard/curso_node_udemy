var controller = require('../controllers/api');

module.exports = function(app){

    app.post('/api', function(req, res){
        controller.api(app, req, res);
    });
};