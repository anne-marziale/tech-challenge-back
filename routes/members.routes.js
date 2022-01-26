const connection = require('../db-config');
const router = require('express').Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM member', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving members from database');
    } else {
      res.json(result);
    }
  });
});

router.get('/:id', (req, res) => {
  const memberId = req.params.id;
  connection.query(
    'SELECT * FROM member WHERE id = ?',
    [memberId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving members from database');
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('Member not found');
      }
    }
  );
});

router.post('/', (req, res) => {
  const { name } = req.body;
  connection.query(
    'INSERT INTO name ( name ) VALUES (?)',
    [name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving the name');
      } else {
        const id = result.insertId;
        const createdMember = { id, name };
        res.status(201).json(createdMember);
      }
    }
  );
});

module.exports = router;