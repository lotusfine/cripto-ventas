const express = require("express")
const app = express()
const path = require("path");
const exp = require("constants");
app.use(express.urlencoded({extended: true}))


const publicpath = path.resolve(__dirname,'./public');
app.use(express.static(publicpath))


app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get("/register",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get("/carrito",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'))
})

app.get("/detalle",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/detalle.html'))
})


//  ---termina la zona de puertos, comienza funcionalidad---
function showmenu() {
    document.getElementsByClassName("header-a").classList.toggle("show");
  }

  app.listen(process.env.PORT || 3000, ()=> {
    console.log("Servidor funcionando");
})