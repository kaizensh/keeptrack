const { supabase } = require('../../supabaseClient');

const createContact = async (contact) => {
  return await supabase.from('contacts').insert(contact);
};

const getContacts = async () => {
  return await supabase.from('contacts').select('*');
};

const getContactById = async (id) => {
  return await supabase.from('contacts').select('*').eq('id', id).single();
};

const updateContact = async (id, contact) => {
  return await supabase.from('contacts').update(contact).eq('id', id);
};

const deleteContact = async (id) => {
  return await supabase.from('contacts').delete().eq('id', id);
};

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};
