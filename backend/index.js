const express = require('express')
const dbConnect = require('./config/dbConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const authRouter = require('./routes/authRoutes')
const productRouter = require('./routes/productRoutes')
const blogRouter = require('./routes/blogRoutes')
const categoryRouter = require('./routes/prodcategoryRoutes')
const blogCategoryRouter = require('./routes/blogcatRoutes')
const brandRouter = require('./routes/brandRoutes')
const colorRouter = require('./routes/colorRouter')
const enqRouter = require('./routes/enqRoutes')
const couponRouter = require('./routes/couponRoutes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(cors())
app.use('/api/user',authRouter)
app.use('/api/product',productRouter)
app.use('/api/blog',blogRouter)
app.use('/api/category',categoryRouter)
app.use('/api/blogcategory',blogCategoryRouter)
app.use('/api/brand',brandRouter)
app.use('/api/color',colorRouter)
app.use('/api/enquiry',enqRouter)
app.use('/api/coupon',couponRouter)
app.use(morgan("dev"))
app.use(notFound)
app.use(errorHandler)
dbConnect()
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})