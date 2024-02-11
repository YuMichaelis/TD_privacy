
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

router.get('/goto',function(req, res){
    let url = encodeURI(req.query.url);
    // Liste des domaines approuvés
    const allowedDomains = ['http://example.com', 'https://yourdomain.com'];
    // Extrait le domaine de l'URL
    const domain = new URL(url).hostname;

    // Vérifie si le domaine de l'URL est dans la liste des domaines approuvés
    if (allowedDomains.some(allowedDomain => new URL(allowedDomain).hostname === domain)) {
        res.redirect(url);
    } else {
        // Si non, redirige vers une page d'erreur ou la page d'accueil
        res.redirect('/error');
    }
}); 


module.exports = router
