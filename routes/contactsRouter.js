import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { createContactSchema, updateContactSchema, updateStatusContactSchema } from "../models/contacts.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { isValidId } from "../helpers/isValidId.js";
import { auth } from "../helpers/auth.js";


const contactsRouter = express.Router();

contactsRouter.get("/", auth, ctrlWrapper(getAllContacts));

contactsRouter.get("/:id", auth, isValidId, ctrlWrapper(getOneContact));

contactsRouter.delete("/:id", auth, isValidId,  ctrlWrapper(deleteContact));

contactsRouter.post("/", auth, validateBody(createContactSchema), ctrlWrapper(createContact));

contactsRouter.put("/:id", auth, isValidId, validateBody(updateContactSchema), ctrlWrapper(updateContact));

contactsRouter.patch("/:id/favorite", auth, isValidId, validateBody(updateStatusContactSchema), ctrlWrapper(updateStatusContact))


export default contactsRouter;