import { useState } from 'react';
import HighscoresComponent from '../components/HighscoresComponent.js';
import { formatDateAsMonth } from '../utilities/format_date.js';

const HighscoresPage = () => {
    const currentMonth = formatDateAsMonth(new Date());
    const [month, setMonth] = useState(currentMonth);

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    return <div>
        <form onSubmit={e=>e.preventDefault()}>
            <label htmlFor="highscores-month">Choose month: </label>
            <input id="highscores-month" type="month" value={month} onChange={handleMonthChange} />
        </form>

        <HighscoresComponent month={month} />
    </div>;
};

export default HighscoresPage;