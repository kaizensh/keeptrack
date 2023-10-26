const contactDb = require('../db/contact.db');

const createContact = async (contact) => {
  return await contactDb.createContact(contact);
};

const getContacts = async () => {
  return await contactDb.getContacts();
};

const getContactById = async (id) => {
  return await contactDb.getContactById(id);
};

const updateContact = async (id, contact) => {
  return await contactDb.updateContact(id, contact);
};

const deleteContact = async (id) => {
  return await contactDb.deleteContact(id);
};

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};
