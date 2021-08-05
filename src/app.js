
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000 //create port to heroku

// definr path for Express config
const publiDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setting up handelbars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to server
app.use(express.static(publiDirectoryPath))

app.get('', (req, res) => {

    res.render('index', {
        title: 'Weather',
        name: 'Abdelrhman Fadul',
    })
})

app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About Me',
        name: 'Abdelrhman Fadul'
    })
    
})

app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Help me',
        name: 'Abdelrhman Fadul',
        errorMessage: 'Help article not found'
    })
    
})

app.get('/help/*', (req, res) => {

    res.render('4O4', {
        title: '4O4',
        name: 'Abdelrhman',
        errorMessage: 'Help article not found'
    })
    
})

app.get('/Weather', (req, res) => {

    if(!req.query.address)
    {
        return res.send({
            error: 'Sorry you must provide term!'
        })
    }

    res.send({
        location: 'philadelphia',
        Weatherforcast: 'It is snowing',
        address: req.query.address
       
        
    })
})

app.get('/products', (req, res) => {

    if(!req.query.search) {

       return res.send({
            error: 'You must provide search term'
        })

    }

    console.log(req.query.search)

    res.send( {
        products: []
    })
})

app.get('*', (req, res) => {

    res.render('4O4', {
        title: '4O4',
        name: 'Abdelrhman',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {

    console.log('Server is listenning on port 3000')
})

