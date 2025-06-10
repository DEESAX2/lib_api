import { Router } from "express";
import { getBook, getOneBook,postBook, patchBook, deleteBook } from "../controllers/library_controller.js";

export const BookRouter = Router()

BookRouter.get('/book', getBook)
BookRouter.get('/book/:id', getOneBook)
BookRouter.post('/book', postBook)
BookRouter.patch('/book/:id', patchBook)
BookRouter.delete('/book/:id', deleteBook)
