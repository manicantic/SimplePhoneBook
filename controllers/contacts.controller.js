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
        if(contact){
            return res.json(contact);
        }
        else{
            return res.sendStatus(404);
        }
        })
    .catch(err => res.sendStatus(500));
};

function updateContact(req,res){
    let contactId= req.params.id;
    let contact=req.body;
    let userId=req.decoded.userId;
    contactsService.updateContact(userId,contactId,contact)
    .then( (updated) => {
        if(updated){
            return res.sendStatus(200);
        }
        else{
            return res.sendStatus(404);
        }
    })
    .catch(err => res.sendStatus(500))
};

function deleteContact(req,res) {
    let contactId= req.params.id;
    let userId=req.decoded.userId;
    contactsService.deleteContact(contactId, userId)
    .then( (deleted) => {
        if(deleted){
            return res.sendStatus(200);
        }
        else{
            return res.sendStatus(404);
        }
    })
    .catch(err => res.sendStatus(500))
};

module.exports = {
    getAll,
    createContact,
    getContact,
    updateContact,
    deleteContact
}