exports.paginaInicial = (req, res) => {
    // console.log(req.flas('error')) aparece o erro e depois ele de atualiza a pagina ele desaparece
    //console.log(req.session.usuario); aparecera rafael e true até 7 dias
    res.render('index')
    return;
};
exports.tratarPost = (req, res) => {
    res.send(req.body);
    return;
}