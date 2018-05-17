var mongodb = require('mongodb');

var db = function() {
    return new mongodb.Db(
        'instagram',
        new mongodb.Server('localhost', 27017, {}),
         {}
    );

}

module.exports = function(){
    console.log('db Carregado');
    return db;
}