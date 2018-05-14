module.exports = function(app) {

  app.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
  });

  app.post('/noticias/salvar', function(req, res){
    var noticia = req.body;

    console.log(noticia);
    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty();
    req.assert('noticia','Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
      res.render('admin/form_add_noticia', {validacao : erros, noticia: noticia});
      return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticias(noticia, function(error, result){
      res.redirect('/noticias/');
    });  
  });
};
