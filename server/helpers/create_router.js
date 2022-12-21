const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const handleError = (res, err) => {
  console.error(err);
  res.status(500);
  res.json({ status: 500, error: err });
};

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch(err => handleError(res, err));
  });
  
  router.get('/random', (req, res) => {
    collection.aggregate(
      [ { $sample: { size: 1 } } ]
   )
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch(err => handleError(res, err));
  });

  /* get an item based on it's name attribute */
  router.get('/name/:name', (req, res) => {
    const name = req.params.name;
    collection
    .findOne({ name : name })
    .then((doc) => res.json(doc))
    .catch(err => handleError(res, err));
  });

  /* get the top 10 items by score for a given month and given game*/
  /* the month is in the format 2022-12 */
  router.get('/game/:game/top10/:month', (req, res) => {
    const { game, month } = req.params;
    if (!month.match(/^\d{4}-\d{2}$/)) {
      return handleError(res, "month in wrong format");
    }

    const date = { $regex: new RegExp(`^${month}`) };
    collection
    .find(
      { date, game },
      { sort: { 'score': -1 }, limit: 10 }
    )
    .toArray()
    .then((docs) => res.json(docs))
    .catch(err => handleError(res, err));
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0]);
    })
    .catch(err => handleError(res, err));
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    collection
    .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
    .then(result => {
      res.json(result);
    })
    .catch(err => handleError(res, err));
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result);
    })
    .catch(err => handleError(res, err));
  });



  return router;
};

module.exports = createRouter;