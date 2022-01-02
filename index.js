
'use strict';

require('dotenv').config();
require('datejs');

const
    express             = require('express'),
    app                 = express(),
    path                = require('path'),
    Twig                = require('twig'),
    bodyparser          = require('body-parser'),
    fs                  = require('fs'),
    redirectToHTTPS     = require('express-http-to-https').redirectToHTTPS;

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyparser.json({ limit: '50mb' }));
// :: Static files
app.use('/pub', express.static(path.resolve(__dirname, './public/pub')));

// :: Redirect
app.get(['/', '/*'], (req, res) => {
    Twig.renderFile('./core/layouts/app.html', {}, (err, html) => {
        if (!err) res.send(html);
        else next(err);
    });
});

// :: Oh no
app.use('/', (req, res, next) => {
  res.status(404).json('File not found');
});

// :: GO
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server listening on port', + port);
