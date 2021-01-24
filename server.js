const express = require('express')
const app = express()
const port = 4000
var bodyParser = require("body-parser");
var cors = require('cors')
app.use(cors())
const cat = require('./src/controllers/category')
const subcat = require('./src/controllers/subcategory')
const prdt = require('./src/controllers/product')
const prdtdet = require('./src/controllers/productdetails')
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use('/category',cat);
app.use('/subcategory',subcat);
app.use('/product',prdt);
app.use('/productdetails',prdtdet)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})