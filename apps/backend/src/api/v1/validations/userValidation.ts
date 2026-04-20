import Joi, { ObjectSchema } from "joi";

// define the correct shape of a user object received in JSON
// Require a id and user name string at minimum
export const userSchema: ObjectSchema = Joi.object({
    userName: Joi.string().required().messages({
        "any.required": "User Name is required",
        "string.empty": "User Name cannot by empty"  
    }),
    dateCreated: Joi.date().optional(),
    profilePic: Joi.string().required().messages({
        "any.required": "Profile picture is required",
        "string.empty": "Profile picture cannot be empty"
    }),
});