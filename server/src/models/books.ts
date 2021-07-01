import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({

    bookId: String,
    bookName: String,
    author: String,
    bookType: String,
    numberOfPages: Number,
    price: Number

})

const Books = mongoose.model('Books', bookSchema)

export default Books