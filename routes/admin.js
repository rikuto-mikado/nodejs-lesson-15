const path = require('path');

const express = require('express');

const router = express.Router();

// GET route to display the add product form
// Serves the add-product.html file when user navigates to /add-product
// path.join() creates an absolute path by going up one directory from routes, then into views folder
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// POST route to handle form submission from add-product page
// Logs the submitted form data (req.body) to the console
// Then redirects the user back to the home page ('/') after processing
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
