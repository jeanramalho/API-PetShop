const customExpress = require('./config/customExpress.js')
const Tabelas = require('./infra/tabelas')
const conexao = require('./infra/conexao')


conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        const app = customExpress()
        
    app.listen(3000, () => {
        console.log('servidor rodando na porta 3000')
    })

    app.get('/' , (req,res) => {
        res.send('Servidor rodando, tudo ok!')
    })
        }
})



