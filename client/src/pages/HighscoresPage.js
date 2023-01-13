import { useState } from 'react';
import HighscoresComponent, { GAMES } from '../components/HighscoresComponent.js';
import { formatDateAsMonth } from '../utilities/format_date.js';

const HighscoresPage = () => {
    const currentMonth = formatDateAsMonth(new Date());
    const [month, setMonth] = useState(currentMonth);
    const [game, setGame] = useState("state");

    const handleMonthChange = (e) => setMonth(e.target.value);
    const handleGameChange = (e) => setGame(e.target.value);

    return <main id="high-score-page">
        <form onSubmit={e=>e.preventDefault()}>
            <div className="label-input">
                <label htmlFor="highscores-game">Choose game: </label>
                <select id="highscores-game" value={game} onChange={handleGameChange}>
                { Object.entries(GAMES).map(([value, title]) =>
                    <option value={value} key={value}>{title}</option>
                ) }
                </select>
            </div>
            <div className="label-input">
                <label htmlFor="highscores-month">Choose month: </label>
                <input id="highscores-month" type="month" value={month} onChange={handleMonthChange} />
            </div>
        </form>

        <HighscoresComponent game={game} month={month} />
    </main>;
};

export default HighscoresPage;