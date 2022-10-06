const express = require("express")
const routes = express.Router()
const cors = require("cors")
const categories = require('./routes/categories')
const stores = require('./routes/stores')
const products = require('./routes/products')
const users = require('./routes/users')
const reviews = require('./routes/reviews')
const carts = require('./routes/carts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/carts', carts)
app.use('/categories', categories)
app.use('/products', products)
app.use('/reviews', reviews)
app.use('/stores', stores)
// app.use('/users', users)


// app.post('/addTocart', (req, res)=>{

// })
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)
})