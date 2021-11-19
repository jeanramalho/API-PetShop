

module.exports = app => {
    app.get('/atendimentos' , (req,res) => {
        res.send('você esta na rota de atendimentos, e está realizando um get')
    })

    app.post('/atendimentos' , (req,res) =>{
        res.send('você está na rota atendimentos e está fazendo um post')
    })
}
    