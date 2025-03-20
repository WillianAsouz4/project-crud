const express = require('express')
const path = require('path')

const app = express()

//definido o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos plúblcos
app.use(express.static(path.join(__dirname, 'public')))

// Definido a pasta para receber dados via pots (Formulario)
app.set(express.urlencoded({extended: true}))

//rotas
app.get('/', (req, res) =>{
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error (not found)
app.use((req, res) =>{
    res.send('Página não encontrada')
})

// exucutando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))