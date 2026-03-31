import Joi, { ObjectSchema } from "joi";

// define the correct shape of a friend object received in JSON
// Require a userId and friendId string at minimum
export const friendSchema: ObjectSchema = Joi.object({
    userId: Joi.string().required().optional(),
    friendId: Joi.string().required().optional(),
    dateAdded: Joi.date().required().optional(),
    isFavourite: Joi.boolean().optional()
});