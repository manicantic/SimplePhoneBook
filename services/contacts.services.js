'use strict'

const db = require('../services/dbConnect.services');

function getAll (userId){
    return db.doQuery('SELECT * FROM contacts WHERE user_id=$1', [userId])
};

function createContact(userId, contact){
    const query='INSERT INTO contacts (user_id, name, surname, email, birthday, phone) VALUES ($1,$2,$3,$4,$5,$6)';
    return db.doQuery(query,[userId,contact.name,contact.surname,contact.email,contact.birthday,contact.phone]);
};

function getContact(contactId){
     const query='SELECT * FROM contacts WHERE id=$1';
     return db.doQuery(query,[contactId]);
};

function updateContact(userId,contactId,contact){
    const query='UPDATE contacts SET name=$1, surname=$2, email=$3, birthday=$4, phone=$5 WHERE id=$6 AND user_id=$7';
    return db.doInsert(query,[contact.name,contact.surname,contact.email,contact.birthday,contact.phone,contactId,userId]);
};

function deleteContact(contactId,userId){
    const query='DELETE FROM contacts WHERE id=$1 AND user_id=$2';
    return db.doInsert(query,[contactId,userId]);
};

module.exports={
    getAll,
    createContact,
    getContact,
    updateContact,
    deleteContact
}