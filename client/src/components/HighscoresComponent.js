import { useEffect, useState } from 'react';

import { getTop10ByMonth, postHighscore } from '../services/HighscoresService.js';
import { formatDateAsMonth, formatDate } from '../utilities/format_date.js';

export const GAMES = {
    "state": "States Quiz",
    "trivia": "Trivia Quiz"
};

const formatOrdinal = (number) => {
    switch (number) {
        case 1:
            return '1st';
        case 2:
            return '2nd';
        case 3:
            return '3rd';
        default:
            return `${number}th`;
    }
};

const HighscoresComponent = ({game, month, newHighscore}) => {
    game ||= "state";

    const currentMonth = formatDateAsMonth(new Date());
    if (!month)
        month = currentMonth;

    const [highscores, setHighscores] = useState([]);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        getTop10ByMonth(game, month)
        .then(data => setHighscores(data));
    }, [game, month])

    const newHighscores = [...highscores];
    
    /* insert the new highscore! */
    let insertionIndex = -1;
    if (newHighscore && !saved) {
        for (let idx = 0; idx < newHighscores.length; idx++) {
            if (newHighscore >= newHighscores[idx].score) {
                insertionIndex = idx;
                break;
            }
        }
        
        if (insertionIndex >= 0) {
            newHighscores.splice(insertionIndex, 0, {
                score: newHighscore
            });
        }
    }

    /* trim to only 10 items */
    if (newHighscores.length > 10) {
        newHighscores.splice(10);
    }

    const saveHighscore = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        if (name.length === 0)
            return;

        const date = formatDate(new Date());

        const newObject = { name, score: newHighscore, date, game };
        postHighscore(newObject)
            .then((result) => {
                setSaved(true);
                newHighscores.splice(insertionIndex, 1, result);
                setHighscores(newHighscores);
            });
    }

    const highscoreItems = newHighscores.map((highscore, index) => {
        return <tr key={index}>
            <td className="place">{formatOrdinal(index+1)}</td>
            <td className="score">{highscore.score}</td>
            { highscore.name ?
                <td className="name">{highscore.name}</td> :
                <td className="name">
                    <form onSubmit={saveHighscore}>
                        <label htmlFor="save-name">Your nickname: </label>
                        <input id="save-name" name="name" type="text"/>
                        <button type="submit">Save</button>
                    </form>
                </td> }
        </tr>
    });

    return <>
        { newHighscore ? <p>You scored: {newHighscore}!</p> : null}
        <table className="highscores">
            <caption>Highscores for { GAMES[game] }</caption>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Score</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                { highscoreItems.length ? highscoreItems :
                    <tr><th colSpan="3" className="noscores">Play to get on the leaderboard!</th></tr>
                }
            </tbody>
        </table>
    </>;
};

export default HighscoresComponent;