import { useEffect, useState } from 'react';

import { getTop10ByMonth } from '../services/HighscoresService.js';

const formatDateAsMonth = (date) => {
    const year = date.getFullYear();
    const monthZeroBased = date.getMonth();
    const month = monthZeroBased < 9 ? '0' + (monthZeroBased + 1) : monthZeroBased + 1;
    return `${year}-${month}`;
}

const HighscoresPage = () => {
    const currentMonth = formatDateAsMonth(new Date());

    const [month, setMonth] = useState(currentMonth);
    const [highscores, setHighscores] = useState([]);

    useEffect(() => {
        getTop10ByMonth(month)
        .then(data => setHighscores(data));
    }, [month])

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const highscoreItems = highscores.map(highscore => {
        return <li>
            <span className="score">{highscore.score}</span>
            <span className="name">{highscore.name}</span>
        </li>
    });

    return <div>
        <form onSubmit={e=>e.preventDefault()}>
            <label htmlFor="highscores-month">Choose month: </label>
            <input id="highscores-month" type="month" value={month} onChange={handleMonthChange} />
        </form>

        <ol className="highscores">
            { highscoreItems }
        </ol>
    </div>;
};

export default HighscoresPage;