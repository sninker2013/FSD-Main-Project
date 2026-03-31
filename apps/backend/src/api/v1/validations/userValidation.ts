import Joi, { ObjectSchema } from "joi";

// define the correct shape of a user object received in JSON
// Require a id and user name string at minimum
export const userSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "User ID is required",
        "string.empty": "User ID cannot be empty"
    }),
    userName: Joi.string().required().messages({
        "any.required": "User Name is required",
        "string.empty": "User Name cannot by empty"  
    }),
    dateCreated: Joi.date().required().messages({
        "any.required": "Date Created is required",
        "date.empty": "Date Created cannot be empty"
    }),
});