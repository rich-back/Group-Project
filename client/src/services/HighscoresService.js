const baseURL = 'http://localhost:9000/api/highscores/';

export const getTop10ByMonth = (month) => {
    return fetch(`${baseURL}/top10/${month}`)
        .then(res => res.json())
}