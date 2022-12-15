exports.paginaInicial = (req,res) => {
        res.render('index')
        return;
};
exports.tratarPost = (req,res) => {
    res.send(req.body);
    return;
}