// import React, { useState } from 'react';
// import { format, addDays } from 'date-fns';
// import { toZonedTime, format as formatTz } from 'date-fns-tz';

// const TimezoneFormatter = () => {
//     const [date, setDate] = useState(new Date());
//     const timeZone = 'Asia/Kolkata';
//     const zonedDate = toZonedTime(date, timeZone); // Convert to New York time

//     const formattedDate = formatTz(zonedDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone });
//     const nextDay = formatTz(toZonedTime(addDays(date, 1)), 'yyyy-MM-dd HH:mm:ss zzz', { timeZone });

//     return (
//         <div style={{ marginLeft: "10px" }}>
//             <h1>Timezone Formatter</h1>
//             <p>Current Date: {formattedDate}</p>
//             <p>Next Day: {nextDay}</p>
//             <button onClick={() => setDate(new Date())} style={{ marginTop: "10px" }} >Refresh</button>
//         </div>
//     );
// };

// export default TimezoneFormatter;

import React, { useState } from 'react';
import {
  format,
  addDays,
  subMonths,
  startOfDay,
  endOfMonth,
  isBefore,
  isAfter,
  isEqual,
  isSameDay,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  parse,
  isValid,
} from 'date-fns';
import { toZonedTime, format as formatTz } from 'date-fns-tz';

const DateFunctionsExample = () => {
  const [date, setDate] = useState(new Date());
  const timeZone = 'Asia/Kolkata';

  // Formatting
  const formattedDate = format(new Date(), 'dd MMMM, yyyy (EEEE)');

  // Manipulation
  const nextWeek = addDays(date, 7);
  const lastMonth = subMonths(date, 1);
  const startOfToday = startOfDay(date);
  const endOfCurrentMonth = endOfMonth(date);

  // Comparison
  const isBeforeNextWeek = isBefore(date, nextWeek);
  const isAfterLastMonth = isAfter(date, lastMonth);
  const isEqualToNow = isEqual(date, new Date());
  const isSameAsToday = isSameDay(date, new Date());

  // Calculation
  const daysDifference = differenceInDays(nextWeek, date);
  const hoursDifference = differenceInHours(nextWeek, date);
  const minutesDifference = differenceInMinutes(nextWeek, date);

  // Parsing
  const dateString = '2023-10-05 14:30:00';
  const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());

  // Validation
  const isValidDate = isValid(date);

  // Time Zone Handling
  const zonedDate = toZonedTime(date, timeZone);
  const formattedZonedDate = formatTz(zonedDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone });

  return (
    <div className="container">
      <h1>Date Functions Example</h1>

      <button onClick={() => setDate(new Date())}>Refresh Date</button>
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
        </div>

        {/* Manipulation Card */}
        <div className="card">
          <h2>Manipulation</h2>
          <p>Next Week: {nextWeek.toString()}</p>
          <p>Last Month: {lastMonth.toString()}</p>
          <p>Start of Today: {startOfToday.toString()}</p>
          <p>End of Current Month: {endOfCurrentMonth.toString()}</p>
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
          <p>Parsed Date from String: {parsedDate.toString()}</p>
        </div>

        {/* Validation Card */}
        <div className="card">
          <h2>Validation</h2>
          <p>Is current date valid? {isValidDate ? 'Yes' : 'No'}</p>
        </div>

        {/* Time Zone Handling Card */}
        <div className="card">
          <h2>Time Zone Handling</h2>
          <p>Zoned Date: {formattedZonedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default DateFunctionsExample;