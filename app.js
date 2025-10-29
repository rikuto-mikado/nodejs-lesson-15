const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 error handler - catches all unmatched routes
// No '../' needed here because app.js is in the project root directory
// __dirname in app.js already points to the project root, so we can directly access 'views'
// In contrast, routes/admin.js is inside the 'routes' folder, so it needs '../' to go up to the root first
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
