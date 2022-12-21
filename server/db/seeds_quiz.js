use('elements_table');
// db.dropDatabase();

db.quiz.drop();
db.trivia.drop();
db.trivia.insertMany(
    [
        {"answers": [{ "text": "Dmitri Mendeleev","value": true},
        { "text": "Niels Bohr","value": false},{ "text": "J J Thomson","value": false}],
        "question": "Which scientist developed an early periodic table?"},
        {"answers": [{ "text": "In order of increasing atomic number","value": true},
        { "text": "In order of increasing atomic mass","value": false},{ "text": "In order of decreasing atomic mass","value": false}],
        "question": "Which scientist developed an early periodic table?"},
        {"answers": [{ "text": "Magnesium","value": true},
        { "text": "Boron","value": false},{ "text": "Calcium","value": false}],
        "question": "Which element is in group 2 and period 3 of the periodic table?"},
        {"answers": [{ "text": "2,8,3","value": true},
        { "text": "3,2,8","value": false},{ "text": "8,2,3","value": false}],
        "question": "What is the electronic structure of an atom of the element whose atomic number is 13?"},
        {"answers": [{ "text": "20","value": true},
        { "text": "16","value": false},{ "text": "18","value": false}],     
        "question": "An atom of an element has the electronic structure 2,8,8,2. What is its atomic number?"},
        {"answers": [{ "text": "7","value": true},
        { "text": "2","value": false},{ "text": "8","value": false}],     
        "question": "An atom of an element has the electronic structure 2,8,7. Which group of the periodic table is it in?"},
        {"answers": [{ "text": "2","value": true},
        { "text": "1","value": false},{ "text": "8","value": false}],     
        "question": "An atom of an element has the electronic structure 2,8,8,1. How many electrons are in the shell nearest the nucleus?"},
        {"answers": [{ "text": "It is a poor conductor of electricity","value": true},
        { "text": "It has a high density","value": false},{ "text": "It is a good conductor of heat","value": false}],     
        "question": "Which of these properties does a typical non-metal element have?"},
        {"answers": [{ "text": "They lose electrons to form positive ions","value": true},
        { "text": "They gain electrons to form negative ions","value": false},{ "text": "They lose electrons to form negative ions","value": false}],     
        "question": "What happens to metal atoms in chemical reactions?"},

        {"answers": [{ "text": "Metals are on the left of the stepped line, and non-metals are on the right of the stepped line","value": true},
        { "text": "Metals are on the right of the stepped line, and non-metals are on the left of the stepped line","value": false},{ "text": "There are more non-metal elements than metal elements","value": false}],     
        "question": "Which statement about metals and non-metals in the periodic table is true?"},  
    ]
);