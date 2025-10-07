import express from 'express'

const app = express()
const PORT = 3000

app.get((req, res, next) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    next()
})

app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial</h1>")
})

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>NÃO TEM NADA SOBRE NÓS</h1>")
})

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>FOTOS DE ALTA PERICULOSIDADE</h1>")
})

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>48988106396</h1>")
})

app.use((req, res) => {
    res.status(404).send("<h1>broxou</h1>")
})

app.listen(PORT, () =>{
    console.log(`Servidor girando em http://localhost:${PORT}`)
})