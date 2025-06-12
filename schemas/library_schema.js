import Joi from 'joi';

export const bookSchema = Joi.object({

    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    imageUrl: Joi.string().required(),
    date: Joi.date().required()
})