const connection = require("../db-config");
const router = require("express").Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM equipage', (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving equipages from database');
      } else {
        res.json(result);
      }
    });
  });

  router.get('/:id', (req, res) => {
  const equipageId = req.params.id;
  connection.query(
    'SELECT * FROM equipage WHERE id = ?',
    [equipageId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving equipages from database');
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('Equipage not found');
      }
    }
  );
});

module.exports = router;