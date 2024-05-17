import HttpError from "../helpers/HttpError.js";

import { Contacts } from "../models/contacts.js";

export const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit, favorite } = req.query;
  const skip = (page - 1) * limit;
  const data = await Contacts.find({ owner }, "", { skip, limit }).populate(
    "owner",
    "email"
  );
  const dataForResp = data.map(({ _id, name, phone, email, favorite}) => ({ "id": _id, name, phone, email, favorite }))
  if (favorite) {
    const newdata = dataForResp.filter((contact) => contact.favorite === true);
    res.status(200).json(newdata);
  }

  res.status(200).json(dataForResp);
};
export const getOneContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const data = await Contacts.findOne({ owner, _id: id }).populate(
    "owner",
    "email"
  );
  if (!data) {
    throw HttpError(404, `Contact with id: ${id} not found`);
  }
  res.status(200).json({
    "id": data._id,
    "name": data.name,
    "phone": data.phone,
    "email": data.email,
    "favorite": data.favorite
  });
};

export const deleteContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const data = await Contacts.findOneAndDelete({ owner, _id: id }).populate(
    "owner",
    "email"
  );
  if (!data) {
    throw HttpError(404, `Contact with id: ${id} not found`);
  }
  res.status(204).json({})
};

export const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await Contacts.create({ ...req.body, owner });
  res.status(201).json({
    "id": contact._id,
    "name": contact.name,
    "phone": contact.phone,
    "email": contact.email,
    "favorite": contact.favorite
  });
};

export const updateContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const reqBody = req.body;
  const hasOwnProp =
    reqBody.hasOwnProperty("name") ||
    reqBody.hasOwnProperty("email") ||
    reqBody.hasOwnProperty("phone");
  if (!hasOwnProp) {
    throw HttpError(400, "Body must have at least one field");
  }
  const contact = await Contacts.findOneAndUpdate({ owner, _id: id }, reqBody, {
    new: true,
  });
  if (!contact) {
    throw HttpError(404, `Contact with id: ${id} not found`);
  }
  res.status(200).json({
    "id": contact._id,
    "name": contact.name,
    "phone": contact.phone,
    "email": contact.email,
    "favorite": contact.favorite
  });
};

export const updateStatusContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const contact = await Contacts.findOneAndUpdate(
    { owner, _id: id },
    req.body,
    { new: true }
  );
  if (!contact) {
    throw HttpError(404);
  }
  res.status(200).json({
    "id": contact._id,
    "name": contact.name,
    "phone": contact.phone,
    "email": contact.email,
    "favorite": contact.favorite
  });
};
