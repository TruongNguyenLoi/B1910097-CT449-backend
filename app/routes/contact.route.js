const express = require('express');
// Các module cần thiết khác...

const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deleteALL);
 
router.route("/favorite")
    .get(contacts.findALLFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .post(contacts.update)
    .delete(contacts.delete);

module.exports = router;
    
