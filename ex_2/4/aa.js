
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

router.get('/goto', function(req, res) {
    let url = req.query.url;
    const allowedDomains = ['https://example.com', 'https://yoursite.com'];
    let isValidRedirect = allowedDomains.some(domain => url.startsWith(domain));
    
    if (isValidRedirect) {
        res.redirect(encodeURI(url));
    } else {
        // Rediriger vers une page d'erreur ou la page d'accueil si l'URL n'est pas valide
        res.redirect('/error');
    }
});


module.exports = router
