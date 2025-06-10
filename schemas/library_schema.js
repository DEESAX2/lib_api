import Joi from 'joi';

export const bookSchema = Joi.object({

    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    image: Joi.string().required(),
    date: Joi.date().required()
})