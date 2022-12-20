use('elements_table');
// db.dropDatabase();

db.quiz.drop();
db.quiz.insertMany(
    [
        {"correctAnswer": "Dmitri Mendeleev",
        "incorrectAnswers": ["Niels Bohr","J J Thomson"],
        "question": "Which scientist developed an early periodic table?"},
        { "correctAnswer": "In order of increasing atomic number",
        "incorrectAnswers": ["In order of increasing atomic mass","In order of decreasing atomic mass"],
        "question": "How are the elements of a period arranged in the modern periodic table, from left to right?"},
        {"correctAnswer": "Magnesium",
        "incorrectAnswers": ["Boron","Calcium"],
        "question": "Which element is in group 2 and period 3 of the periodic table?"},
        {"correctAnswer": "2,8,3",
        "incorrectAnswers": ["3,2,8","8,2,3"],
        "question": "What is the electronic structure of an atom of the element whose atomic number is 13?"},
        {"correctAnswer": "20",
        "incorrectAnswers": ["16","18"],
        "question": "An atom of an element has the electronic structure 2,8,8,2. What is its atomic number?"},
        {"correctAnswer": "7",
        "incorrectAnswers": ["2","8"],
        "question": "An atom of an element has the electronic structure 2,8,7. Which group of the periodic table is it in?"},
        {"correctAnswer": "2",
        "incorrectAnswers": ["1","8"],
        "question": "An atom of an element has the electronic structure 2,8,8,1. How many electrons are in the shell nearest the nucleus?"},
        {"correctAnswer": "It is a poor conductor of electricity",
        "incorrectAnswers": ["It has a high density","It is a good conductor of heat"],
        "question": "Which of these properties does a typical non-metal element have?"},
        {"correctAnswer": "They lose electrons to form positive ions",
        "incorrectAnswers": ["They gain electrons to form negative ions","They lose electrons to form negative ions"],
        "question": "What happens to metal atoms in chemical reactions?"},
        {"correctAnswer": "Metals are on the left of the stepped line, and non-metals are on the right of the stepped line",
        "incorrectAnswers": ["Metals are on the right of the stepped line, and non-metals are on the left of the stepped line","There are more non-metal elements than metal elements"],
        "question": "Which statement about metals and non-metals in the periodic table is true?"},  
    ]
);
