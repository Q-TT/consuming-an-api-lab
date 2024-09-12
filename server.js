////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()
const express = require('express');
const app = express();



//////////////////////
// Declare Middleware
//////////////////////
app.use(express.urlencoded({extended:true}))
//! this comes with express that is used for encoded URL
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get('/', (req, res) => {
    res.render('index.ejs')
  })

app.post('/weather', async (req, res) => {
    
    const newZipCode = req.body.zipcodeInput
  
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${newZipCode},us&units=imperial&appid=${process.env.API_KEY}`)
    //! we use await or async to fetch promise type of data that is used for API
    let weatherData = await weather.json()
    //! we need to json stringify the data we get back from API, when the content-type is application/json

    //! the standard of an API return is json

    console.log(weatherData)
    res.render("show.ejs", {
      newZipCode,
      weatherData,
    })
  })

// INDUCES - Index, New, Delete, Update, Create, Edit, Show
///////////////////////////


// Server Listener
///////////////////////////
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`)
})

  

