const router = require('express').Router();
//const router = express.Router();
const connection = require('../conf');
const bodyParser = require('body-parser');

// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

// GET all productions
router.get('/', (req, res) => {
  connection.query('SELECT * FROM production', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des productions')
    } else {
      res.json(results)
    }
  });
});

// GET a production by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
  
    connection.query('SELECT * FROM production WHERE id = ?', id, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération de la production')
      } else {
        res.json(results)
      }
    });
  });



  module.exports = router;