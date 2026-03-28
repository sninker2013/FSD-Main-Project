import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const friendSchema: ObjectSchema = Joi.object({
    userId: Joi.string().required().messages({
        "any.required": "User ID is required",
        "string.empty": "User ID cannot be empty"
    }),
    friendId: Joi.string().required().messages({
        "any.required": "Friend ID is required",
        "string.empty": "Friend ID cannot be empty"
    }),
    dateAdded: Joi.string().required().messages({
        "any.required": "Date Added is required",
        "string.empty": "Date Added cannot be empty"
    }),
    isFavourite: Joi.boolean().optional()
});