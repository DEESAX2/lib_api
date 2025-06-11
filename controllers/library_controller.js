import{ Book } from "../models/library_model.js"
import { bookSchema } from "../schemas/library_schema.js"

// this is to save or post book in the database
// export const postBook = async (req, res) => {
//     const postBook = await Book.create(req.body)
//     res.send(postBook)

// }
export const postBook = async (req, res) => {
    try {

        const { error, value } = bookSchema.validate(req.body)
        if (error) {
            return res.status(400).json(error.details[0].message)
        }
        const postBook = await Book.create(value)

        return res.status(201).json({ "Books": postBook })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }

}

// this is to find books in the database
// export const getBook = async (req, res) => {
    
//     const getBook = await Book.find().exec();

//     res.send(getBook)
// }
export const getBook = async (req, res) => {
  try {
    res.status(200).json(await Book.find());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// this is to find just one book in the database
// export const getOneBook = async (req, res) => {
//     const id = req.params.id
//     const getOneBook = await Book.findById(id)
//     res.send(getOneBook)

// }
export const getOneBook = async (req, res) => {
  const id = req.params.id;
  try {
    const getOneBook = await Book.findById(id);
    if (!getOneBook) {
      res.status(404).json({ error: `this ID does not exist, please enter the right ID ${id}`})
    } return res.status(200).json(getOneBook);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// this is to update details of a book in the database
// export const patchBook = async (req, res) => {
//     const id = req.params.id
//     const patchBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
//     res.send(patchBook)
// }
export const patchBook = async (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).json(await Book.findByIdAndUpdate(id, req.body, { new: true }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// this is to delete book from the database
// export const deleteBook = async (req, res) => {
//     const id = req.params.id
//     const deleteBook = await Book.findByIdAndDelete(id)
//     res.send(deleteBook)
// }
export const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).json({ error: `this ID Does not exist ${id}`})
    } return res.status(200).json(deleteBook);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}