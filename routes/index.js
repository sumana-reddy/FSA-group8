var express = require('express');
var router = express.Router();
const locationRoutes = require('./location.routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
try {
  router.use('/location', locationRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}
module.exports = router;
