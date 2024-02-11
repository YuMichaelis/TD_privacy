
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
    const url = req.query.url;
    // Appliquez une validation pour vérifier que l'URL appartient à une liste approuvée
    const allowedDomains = ['http://example.com', 'https://yourdomain.com'];
    const isValidRedirect = allowedDomains.some(domain => url.startsWith(domain));
    if (isValidRedirect) {
        res.redirect(encodeURI(url));
    } else {
        // Redirigez vers une page par défaut ou affichez un message d'erreur si l'URL n'est pas valide
        res.redirect('/error');
    }
});


module.exports = router
