
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
    let url = req.query.url; // Obtenez l'URL à partir de la requête
    const allowedDomains = ['https://example.com', 'https://trusteddomain.com']; // Liste des domaines autorisés

    try {
        const parsedUrl = new URL(url);
        const isValidDomain = allowedDomains.some(domain => parsedUrl.hostname === new URL(domain).hostname);
        
        if (isValidDomain) {
            res.redirect(url);
        } else {
            res.status(400).send('Redirection non autorisée.'); // Ou rediriger vers une page d'erreur
        }
    } catch (error) {
        res.status(400).send('URL invalide.');
    }
}); 


module.exports = router
