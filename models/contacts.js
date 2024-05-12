import { Schema, model } from "mongoose";
import { handleMongooseError } from "../helpers/handleMongooseError.js";
import Joi from "joi";

const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"]
    },
    email: { type: String },
    phone: { type: String },
    favorite: {
        type: Boolean,
        default: false
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    }
},
    { versionKey: false, timestamps: true });

contactsSchema.post("save", handleMongooseError);

export const Contacts = model("contacts", contactsSchema);

export const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string().required(),
    favorite: Joi.boolean()
})

export const updateContactSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string()
})

export const updateStatusContactSchema = Joi.object({
    favorite: Joi.boolean().required(),
})