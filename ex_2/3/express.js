const express = require('express')
const router = express.Router()

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

router.get('/greeting', (req, res) => {
    const { name }  = req.query;
    res.send('<h1>Hello: ' + escapeHTML(name) + '</h1>');
})

router.get('/greet-template', (req,res) => {
    name = req.query.name
    res.render('index', { user_name: name});
})

module.exports = router
