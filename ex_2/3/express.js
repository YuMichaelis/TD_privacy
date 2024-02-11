const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    const { name }  = req.query;
    res.send('<h1> Hello :'+ name +"</h1>")
})

router.get('/greet-template', (req,res) => {
    name = req.query.name
    res.render('index', { user_name: name});
})

module.exports = router







// const express = require('express');
// const sanitizeHtml = require('sanitize-html');
// const router = express.Router();

// router.get('/greeting', (req, res) => {
//     const { name } = req.query;
//     const sanitized = sanitizeHtml(name, {
//         allowedTags: [],
//         allowedAttributes: {} 
//     });
//     res.send(`<h1>Hello: ${sanitized}</h1>`);
// });

// router.get('/greet-template', (req, res) => {
//     const name = req.query.name;
//     const sanitized = sanitizeHtml(name, {
//         allowedTags: [],
//         allowedAttributes: {}
//     });
//     res.render('index', { user_name: sanitized });
// });

// module.exports = router;
