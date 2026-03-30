import Joi, { ObjectSchema } from "joi"

export const reviewSchema: ObjectSchema = Joi.object({
    stars: Joi.number().integer().min(1).max(5).required(),
    reviewContents: Joi.string().required().messages({
        "any.required": "Review description is required",
        "string.empty": "Review description cannot be empty"
    }),
})