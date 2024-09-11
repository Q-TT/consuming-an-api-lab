////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const app = express();


//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get('/', (req, res) => {
    res.render('index.ejs')
  })


// INDUCES - Index, New, Delete, Update, Create, Edit, Show
///////////////////////////


// Server Listener
///////////////////////////
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`)
})

  

