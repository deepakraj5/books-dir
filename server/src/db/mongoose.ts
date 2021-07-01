import mongoose from 'mongoose'

const url: string = `mongodb://127.0.0.1:27017`

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})