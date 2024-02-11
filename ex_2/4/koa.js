
const Koa = require('koa');
const urlLib = require('url');
const app = new Koa();

app.use(async ctx => {
    var url = ctx.query.target;
    // Liste des domaines approuvés
    const allowedDomains = ['http://example.com', 'https://yourdomain.com'];
    const hostname = urlLib.parse(url).hostname;

    if (allowedDomains.includes(`http://${hostname}`) || allowedDomains.includes(`https://${hostname}`)) {
        ctx.redirect(url);
    } else {
        ctx.body = "Redirection non autorisée.";
    }
});

app.listen(3000);