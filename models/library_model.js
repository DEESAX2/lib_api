
import{ Schema, model, trusted } from "mongoose"; 
import normalize from "normalize-mongoose"
// books field 

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    
    genre: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true})

export const Book = model('Books', bookSchema.plugin(normalize));