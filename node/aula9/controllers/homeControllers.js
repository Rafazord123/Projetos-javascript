exports.paginaInicial = (req,res) => {
        res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type ="text" name ="nome">
        <button>Enviar</button>
        </form>
        `);
};
exports.tratarPost = (req,res) => {
    res.send('Ei, sou sua nova rota post')
}