import { useEffect, useState } from 'react';

import { getTop10ByMonth } from '../services/HighscoresService.js';
import { formatDateAsMonth } from '../utilities/format_date.js';

const HighscoresComponent = ({month}) => {
    const currentMonth = formatDateAsMonth(new Date());
    if (!month)
        month = currentMonth;

    const [highscores, setHighscores] = useState([]);

    useEffect(() => {
        getTop10ByMonth(month)
        .then(data => setHighscores(data));
    }, [month])

    const highscoreItems = highscores.map(highscore => {
        return <li>
            <span className="score">{highscore.score}</span>
            <span className="name">{highscore.name}</span>
        </li>
    });

    return (
        <ol className="highscores">
            { highscoreItems }
        </ol>
    );
};

export default HighscoresComponent;