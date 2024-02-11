
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

app.get('/goto', function (req, res) {
    const userProvidedUrl = req.query.url;

    // Validate the URL using a library like valid-url
    if (isValidUrl(userProvidedUrl)) {
        // Parse the user-provided URL
        const parsedUrl = url.parse(userProvidedUrl);

        // Construct a new URL with the current domain and the path from the user-provided URL
        const safeRedirectUrl = `${req.protocol}://${req.get('host')}${parsedUrl.path || '/'}`;

        // Redirect to the safe URL
        res.redirect(safeRedirectUrl);
    } else {
        // URL is not valid, handle the error (e.g., redirect to a safe location)
        res.status(400).send('Invalid URL');
    }
});

function isValidUrl(userProvidedUrl) {
    // Use a URL validation library or custom logic to validate the URL
    // In this example, we use a simple check to ensure the URL starts with 'http://' or 'https://'
    return userProvidedUrl.startsWith('http://') || userProvidedUrl.startsWith('https://');
}

module.exports = router
