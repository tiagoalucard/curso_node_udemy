var db = require('../../config/dbConnection')();

module.exports.api = function(app, req, res){

    var dados = req.body;

    db().open( function(err, mongoclient){

        mongoclient.collection('postagens', function(err, collection){
            collection.insert(dados, function(err, records){
                if(err){
                    res.json(err);
                }else{
                    res.json(records);
                }
                mongocliente.close();
            });
        });
    });

    res.send(dados);
    return;

};
