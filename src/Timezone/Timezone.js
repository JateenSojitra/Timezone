import React, { useState, useEffect } from 'react';
import SelectPickerRsuite from './SelectPickerRsuite';

const Timezone = () => {
    const [timezones, setTimezones] = useState([]);
    const [timezoneValue, setTimezoneValue] = useState('Asia/Kolkata'); // Default timezone

    useEffect(() => {
        // Fetch the list of available time zones
        fetch('https://timeapi.io/api/timezone/availabletimezones')
            .then(response => response.json())
            .then(data => {
                setTimezones(data);
            })
            .catch(error => {
                console.error('Error fetching timezones:', error);
            });
    }, []);

    // Format date based on the selected timezone
    const formatDate = (timezone, status = 8) => {
        const now = new Date();
        const dateInISOString = now.toISOString()
        const date = new Date(dateInISOString)
        
        let dateOption = {}
        if (status === 1) {
            // 27/02/2025
            dateOption = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                timeZone: timezone,
            };
        }
        else if (status === 2) {
            // 27 Feb 2025
            dateOption = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: timezone,
            };
        }
        else if (status === 3) {
            // 27 February 2025
            dateOption = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: timezone,
            };
        }
        else if (status === 4) {
            // Thursday 27 February, 2025
            dateOption = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: timezone,
            };
        }
        else if (status === 5) {
            // 12:00 pm
            dateOption = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: timezone,
            };
        }
        else if (status === 6) {
            // 12:00:00 pm
            dateOption = {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
                timeZone: timezone,
            };
        }
        else if (status === 7) {
            // 27/02/2025, 12:00 pm 
            dateOption = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: timezone,
            };
        }
        else if (status === 8) {
            // 27 Feb 2025, 12:00 pm
            dateOption = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: timezone,
            };
        }
        else if (status === 9) {
            // 27 February 2025 at 12:00 pm
            dateOption = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                // second: 'numeric',
                hour12: true,
                timeZone: timezone,
            };
        }
        else if (status === 10) {
            // Thursday 27 February, 2025 at 12:00 pm
            dateOption = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
                // second: 'numeric',
                hour12: true,
                // timeZoneName: 'long',
                timeZone: timezone,
            };
        }

        return new Intl.DateTimeFormat('en-IN', dateOption).format(date);
    };

    // Transform timezones into { label, value } pairs for SelectPickerRsuite
    const newTimeZoneData = timezones.map((data, index) => ({
        label: data,
        value: data, // Use the timezone itself as the value
    }));

    // change timezone data
    const handleChange = (value) => {
        setTimezoneValue(value); // Update the selected timezone
        console.log('Selected Timezone:', value);
    };

    const now = new Date()

    const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
    console.log(date + 'T00:00:00.000Z', 'daydayday')
    console.log(date + 'T23:59:59.999Z', 'daydayday')

    // const lastmonth = now.getFullYear() + '-' + (now.getMonth() - 1) + '-' + now.
    const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    
    console.log("First Day of Last Month:", firstDayLastMonth); 
    console.log("Last Day of Last Month:", lastDayLastMonth.getFullYear() + '-' + (lastDayLastMonth.getMonth() + 1) + '-' + lastDayLastMonth.getDate() + 'T23:59:59.999Z');

    return (
        <>
            <h2> ** JavaScript Date Get Methods ** </h2>
            <div style={{ marginLeft: "25px", marginTop: "20px" }}>
                <h5> Year: {new Date().getFullYear()} </h5>
                <h5> Month: {new Date().getMonth()} </h5>
                <h5> Date: {new Date().getDate()} </h5>
                <h5> Day: {new Date().getDay()} </h5>
                <h5> Hours: {new Date().getHours()} </h5>
                <h5> Minutes: {new Date().getMinutes()} </h5>
                <h5> Seconds: {new Date().getSeconds()} </h5>
            </div>

            <div style={{ marginTop: "50px" }}>
                <h2> ** Formatting Dates using Intl.DateTimeFormat() ** </h2>
                <div style={{ marginTop: "25px", marginLeft: "25px" }}>
                    <label htmlFor="codes">Select Timezone : </label>

                    { /* dropdown for different timezone */ }
                    <SelectPickerRsuite
                        placeholder="Select a timezone"
                        data={newTimeZoneData}
                        cleanable={false}
                        onChange={ (e) => handleChange(e)}
                        value={timezoneValue}
                    />
                </div>

                <div style={{ marginTop: "25px", marginLeft: "25px" }}>
                    <h4>Formatted Date and Time:</h4>
                    <p>{timezoneValue ? formatDate(timezoneValue, 1) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 2) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 3) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 4) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 5) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 6) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 7) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 8) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 9) : ""}</p>
                    <p>{timezoneValue ? formatDate(timezoneValue, 10) : ""}</p>
                </div>
            </div>
        </>
    );
};

export default Timezone;
