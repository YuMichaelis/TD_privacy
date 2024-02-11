
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
    // Vérifie si l'URL commence par un chemin approuvé
    if (url.startsWith("/chemin/approuvé") || url === "urlSpécifiqueAutorisée") {
        res.redirect(encodeURI(url));
    } else {
        // Gérer le cas d'une URL non approuvée
        res.send("Redirection non autorisée.");
    }
});


module.exports = router
