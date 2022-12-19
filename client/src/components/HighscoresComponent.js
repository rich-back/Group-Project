import { useEffect, useState } from 'react';

import { getTop10ByMonth } from '../services/HighscoresService.js';
import { formatDateAsMonth } from '../utilities/format_date.js';

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

const HighscoresComponent = ({month}) => {
    const currentMonth = formatDateAsMonth(new Date());
    if (!month)
        month = currentMonth;

    const [highscores, setHighscores] = useState([]);

    useEffect(() => {
        getTop10ByMonth(month)
        .then(data => setHighscores(data));
    }, [month])

    const highscoreItems = highscores.map((highscore, index) => {
        return <tr>
            <td className="place">{formatOrdinal(index+1)}</td>
            <td className="score">{highscore.score}</td>
            <td className="name">{highscore.name}</td>
        </tr>
    });

    return (
        <table className="highscores">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Score</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                { highscoreItems }
            </tbody>
        </table>
    );
};

export default HighscoresComponent;