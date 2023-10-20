const express = require('express')
const dotenv = require ('dotenv')
const colors = require('colors')

//vincular el archivo. env 
dotenv.config(
    {path:'./config/.env'}
)
//contruir el objeto de la aplicación

app = express()
//rutas bootcamps

//traer todas las rutas
app.get('/bootcamps',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los bootcamps"
    })
})

//traer un bootcamp  por id

app.get('/bootcamps/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara bootcamp cuyo id es: ${req.params.id}` 
    })
})

//crear un bootcamps

app.post('/bootcamps',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un bootcamp` 
    })
})


//actualizar un bootcamp por id

app.put('/bootcamps/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara bootcamp cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un bootcamp por id

app.delete('/bootcamps/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara bootcamp cuyo id es: ${req.params.id}` 
    })
})


//courses
//traer todas las rutas
app.get('/courses',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los courses"
    })
})

//traer un bootcamp  por id

app.get('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara course cuyo id es: ${req.params.id}` 
    })
})

//crear un bootcamps

app.post('/courses',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un course` 
    })
})


//actualizar un bootcamp por id

app.put('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara un course cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un bootcamp por id

app.delete('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara un course cuyo id es: ${req.params.id}` 
    })
})


//users
//traer todas las rutas
app.get('/users',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los users"
    })
})

//traer un users  por id

app.get('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara users cuyo id es: ${req.params.id}` 
    })
})

//crear un users

app.post('/users',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un users` 
    })
})


//actualizar un users por id

app.put('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara users cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un users por id

app.delete('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara users cuyo id es: ${req.params.id}` 
    })
})


//reviews
//traer todas las rutas
app.get('/reviews',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los reviews"
    })
})

//traer un reviews  por id

app.get('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara reviews cuyo id es: ${req.params.id}` 
    })
})

//crear un reviews

app.post('/reviews',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un reviews` 
    })
})


//actualizar un reviews por id

app.put('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara reviews cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un reviews por id

app.delete('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara reviews cuyo id es: ${req.params.id}` 
    })
})




app.listen(process.env.PUERTO ,()=> {
console.log(`servidor en ejecucion: ${process.env.PUERTO}`.bgGreen.red.bold)
})