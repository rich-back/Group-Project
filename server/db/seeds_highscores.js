use('elements_table');
// db.dropDatabase();

db.highscores.drop()
db.highscores.insertMany(
    [
        { "game": "state", "name": "player1", "score": 1, "date": "2022-11-01" },
        { "game": "state", "name": "player2", "score": 2, "date": "2022-11-01" },
        { "game": "state", "name": "player3", "score": 3, "date": "2022-12-01" },
        { "game": "state", "name": "player4", "score": 4, "date": "2022-12-02" },
        { "game": "state", "name": "player5", "score": 5, "date": "2022-12-03" },
        { "game": "state", "name": "player6", "score": 6, "date": "2022-12-04" },
        { "game": "state", "name": "player7", "score": 2, "date": "2022-12-05" },
        { "game": "state", "name": "player8", "score": 3, "date": "2022-12-06" },
        { "game": "state", "name": "player9", "score": 4, "date": "2022-12-07" },
        { "game": "state", "name": "player10", "score": 5, "date": "2022-12-08" },
        { "game": "state", "name": "player11", "score": 6, "date": "2022-12-09" },
        { "game": "state", "name": "player12", "score": 7, "date": "2022-12-10" },
    ]
);