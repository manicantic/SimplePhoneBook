'use strict'

const contactsService = require('../services/contacts.services');

function getAll(req, res){
    contactsService.getAll(req.decoded.userId)
    .then( (contacts) => {return res.json(contacts)})
    .catch(err => res.sendStatus(500));
};

function createContact(req,res){
    contactsService.createContact(req.decoded.userId,req.body)
    .then((contactId) => {return res.json({id:contactId})})
    .catch(err => res.sendStatus(500));
};

function getContact(req,res){
    let contactId= req.params.id;
    contactsService.getContact(contactId)
    .then((contact) => {
            return res.json(contact);
        })
    .catch(err => res.sendStatus(err.status));
};

function updateContact(req,res){
    let contactId= req.params.id;
    let contact=req.body;
    let userId=req.decoded.userId;
    contactsService.updateContact(userId,contactId,contact)
    .then( (updated) => {
        return res.sendStatus(200);
    })
    .catch(err => res.sendStatus(err.status))
};

function deleteContact(req,res) {
    let contactId= req.params.id;
    let userId=req.decoded.userId;
    contactsService.deleteContact(contactId, userId)
    .then( (deleted) => {
        return res.sendStatus(200);
    })
    .catch(err => res.sendStatus(err.status))
};

module.exports = {
    getAll,
    createContact,
    getContact,
    updateContact,
    deleteContact
}