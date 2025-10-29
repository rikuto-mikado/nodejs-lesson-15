const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Send the shop.html file to the client
  // path.join() creates a platform-independent path by joining __dirname (routes directory), '../' (parent directory), 'views', and 'shop.html'
  // This navigates up from the routes folder to the project root, then into views/shop.html
  // res.sendFile() requires an absolute path, which path.join() with __dirname provides
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
