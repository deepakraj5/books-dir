import express from 'express'
import './db/mongoose'

const app = express()

const PORT = process.env.PORT || 3001





app.use(express.json())


import booksRouter from './routers/books/books'
app.use('/api/v1', booksRouter)






app.listen(PORT, (): void => console.log(`server upon port ${PORT}`))