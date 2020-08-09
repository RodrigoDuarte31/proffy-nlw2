// Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

// Configurando o nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
// Receber arquivos do req.body
.use(express.urlencoded({ extended: true }))
// Configuração de arquivos estáticos
.use(express.static("public"))
// Configuração das rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)