const baseURL = 'http://localhost:9000/api/trivia/';

export const getRandomTrivia = () => {
    return fetch(`${baseURL}/random`)
        .then(res => res.json())
};

