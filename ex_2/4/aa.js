
// console.log('WIP')
// const express = require('express');
// const router = express.Router()

// router.get('/login',function(req, res){
//     let followPath = req.query.path;
//     if(req.session.isAuthenticated()){
//         res.redirect('http://example.com/'+followPath); //false positive
//     }else{
//         res.redirect('/');
//     }
// }); 

// router.get('/goto',function(req, res){
//     let url = encodeURI(req.query.url); //vulnerability
//     res.redirect(url);
// }); 


// module.exports = router


console.log('WIP')
const express = require('express');
const router = express.Router()

router.get('/login',function(req, res){
    let followPath = req.query.path;
    if(req.session.isAuthenticated()){
        res.redirect('http://example.com/'+followPath); //false positive
    }else{
        res.redirect('/');
    }
}); 

const validUrl = require('valid-url'); // Import the valid-url library or any other URL validation library

const allowedDomains = ['https://example.com', 'https://trusted.com'];
router.get('/goto', function(req, res) {
    const url = req.query.url;
    const domain = new URL(url).hostname;

    if (allowedDomains.some(allowedDomain => domain === new URL(allowedDomain).hostname)) {
        res.redirect(url);
    } else {
        res.status(400).send('Redirection non autorisée.');
    }
});


module.exports = router

