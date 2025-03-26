import React, { useState } from 'react';
import moment from 'moment';

const MomentExample = () => {
    const [date, setDate] = useState(moment());

    // Formatting
    const formattedDate = date.format('YYYY-MM-DD HH:mm:ss');
    const formattedDateWithLocale = date.locale('en-IN').format('MMMM Do YYYY, h:mm:ss a');

    // Manipulation
    const nextWeek = date.clone().add(7, 'days');
    const lastMonth = date.clone().subtract(1, 'months');
    const startOfToday = date.clone().startOf('day');
    const endOfToday = date.clone().endOf('day');
    const startOfCurrentMonth = date.clone().startOf('month'); // don't need to write separate 'T00:00:00.000' 
    const endOfCurrentMonth = date.clone().endOf('month'); // don't need to write separate 'T23:59:59.999' 

    // Comparison
    const date1 = moment('20250225', 'YYYYMMDD')
    const date2 = moment('28022025', 'DDMMYYYY') 

    const isBeforeNextWeek = date1.isBefore(date2);
    const isAfterLastMonth = date.isAfter(lastMonth);
    const isEqualToNow = date.isSame(moment());
    const isSameAsToday = date.isSame('2025-02-25', 'day');

    // Calculation
    const daysDifference = nextWeek.diff(date, 'days');
    const hoursDifference = nextWeek.diff(date, 'hours');
    const minutesDifference = nextWeek.diff(date, 'minutes');

    // Parsing
    const dateString = '2023-10-05 14:30:00';
    const parsedDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

    // Validation
    const isValidDate = date.isValid();

    // Relative Time
    const yearago = moment("25-02-2025", "DD-MM-YYYY").fromNow()

    return (
        <div className="container">
            <h1>Moment.js Example</h1>

            <div className="card-container">
                {/* Current Date Card */}
                <div className="card">
                    <h2>Current Date</h2>
                    <p>{date.toString()}</p>
                </div>

                {/* Formatting Card */}
                <div className="card">
                    <h2>Formatting</h2>
                    <p>Formatted Date: {formattedDate}</p>
                    <p>Formatted Date: {formattedDateWithLocale}</p>
                </div>

                {/* Manipulation Card */}
                <div className="card">
                    <h2>Manipulation</h2>
                    <p>Next Week: {nextWeek.format('YYYY-MM-DD')}</p>
                    <p>Last Month: {lastMonth.format('YYYY-MM-DD')}</p>
                    <p>Start of Today: {startOfToday.format('YYYY-MM-DD HH:mm:ss')}</p>
                    <p>End of Current Month: {endOfToday.format('YYYY-MM-DD HH:mm:ss')}</p>
                    <p>Start of Current Month (In ISO String): {startOfCurrentMonth.format('YYYY-MM-DDTHH:mm:ss.SSS')}</p>
                    <p>End of Current Month (In ISO String): {endOfCurrentMonth.format('YYYY-MM-DDTHH:mm:ss.SSS')}</p>
                </div>

                {/* Comparison Card */}
                <div className="card">
                    <h2>Comparison</h2>
                    <p>Is current date before next week? {isBeforeNextWeek ? 'Yes' : 'No'}</p>
                    <p>Is current date after last month? {isAfterLastMonth ? 'Yes' : 'No'}</p>
                    <p>Is current date equal to now? {isEqualToNow ? 'Yes' : 'No'}</p>
                    <p>Is current date the same as today? {isSameAsToday ? 'Yes' : 'No'}</p>
                </div>

                {/* Calculation Card */}
                <div className="card">
                    <h2>Calculation</h2>
                    <p>Days until next week: {daysDifference}</p>
                    <p>Hours until next week: {hoursDifference}</p>
                    <p>Minutes until next week: {minutesDifference}</p>
                </div>

                {/* Parsing Card */}
                <div className="card">
                    <h2>Parsing</h2>
                    <p>Parsed Date from String: {parsedDate.format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>

                {/* Validation Card */}
                <div className="card">
                    <h2>Validation</h2>
                    <p>Is current date valid? {isValidDate ? 'Yes' : 'No'}</p>
                </div>

                {/* Relative Card */}
                <div className="card">
                    <h2>Relativ Time</h2>
                    <p>Year ago: {yearago}</p>
                </div>
            </div>

            <button onClick={() => setDate(moment())}>Refresh Date</button>
        </div>
    );
};

export default MomentExample;