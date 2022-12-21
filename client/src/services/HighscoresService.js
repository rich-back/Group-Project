const baseURL = 'http://localhost:9000/api/highscores/';

export const getTop10ByMonth = (game, month) => {
    if (!game || !month) {
        console.error("getTop10ByMonth needs both game and month");
        return;
    }
    return fetch(`${baseURL}/game/${game}/top10/${month}`)
        .then(res => res.json())
}

export const postHighscore = (payload) => {
    return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
}