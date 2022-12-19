const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('elements_table');

  const elementsCollection = db.collection('elements');
  const elementsRouter = createRouter(elementsCollection)
  app.use('/api/elements', elementsRouter);

  const quizCollection = db.collection('quiz');
  const quizRouter = createRouter(quizCollection)
  app.use('/api/quiz', quizRouter);

  const highscoresCollection = db.collection('highscores');
  const highscoresRouter = createRouter(highscoresCollection);
  app.use('/api/highscores', highscoresRouter);

  app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})