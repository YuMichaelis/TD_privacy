
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

router.get('/goto', function (req, res) {
    const url = req.query.url;

    // Validate the URL
    if (validUrl.isUri(url)) {
        // URL is valid, perform the redirect
        res.redirect(url);
    } else {
        // URL is not valid, handle the error (e.g., redirect to a safe location)
        res.status(400).send('Invalid URL');
    }
});


module.exports = router
