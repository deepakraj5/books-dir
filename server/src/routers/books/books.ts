import express, { Request, Response } from 'express'
import Books from '../../models/books'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()


router.get('/books/list', async (req: Request, res: Response) => {
    try {
        
        const books = await Books.find({})
        
        if (books.length === 0) return res.send('no books found')
        res.send(books)
        

    } catch (error) {
        res.status(500).send('something went wrong')
    }
})



router.get('/books/:bookId', async (req: Request, res: Response) => {
    try {

        const { bookId } = req.params
        
        const books = await Books.find({ bookId })
        
        if (books.length === 0) return res.send('no books found')
        res.send(books)
        

    } catch (error) {
        res.status(500).send('something went wrong')
    }
})




router.post('/book/create', async (req: Request, res: Response) => {
    try {
        
        const book = new Books(req.body)
        book.bookId = uuidv4()
        book.save()

        res.send('book saved')

    } catch (error) {
        res.status(500).send('something went wrong')
    }
})



export default router