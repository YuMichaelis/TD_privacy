const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    const { name } = req.query;
    // Utilisation d'une fonction d'échappement pour les caractères spéciaux HTML
    const escapeHTML = str => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    let safeName = escapeHTML(name);
    res.send(`<h1> Hello :${safeName}</h1>`);
});

module.exports = router
