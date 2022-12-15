// module.exports = (req,res,next) => {
//     if(req.body.cliente) {
//     req.body.cliente = req.body.cliente.replace('Batista', 'Carvalho')
//     console.log()
//     console.log(`vi que você postou ${req.body.cliente}`)
//     console.log()
//     }

//     next();
// }
exports.middleGlobal = (req,res,next) => {
    next();
}
exports.outroMiddleware = (req,res,next) => {
    next();
}