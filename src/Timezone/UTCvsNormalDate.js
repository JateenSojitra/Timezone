import React, { useEffect, useState } from 'react';
import { DatePicker } from 'rsuite';

const UTCvsNormalDate = () => {
    // State to hold the selected date
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());

    const [selectedStartDateUTC, setSelectedStartDateUTC] = useState(new Date());
    const [selectedEndDateUTC, setSelectedEndDateUTC] = useState(new Date());

    useEffect(() => {
        const now = new Date();
        handleNormalStartDate(now);
        handleNormalEndDate(now);
        handleUTCStartDate(now);
        handleUTCEndDate(now);
    }, []);

    const handleNormalStartDate = (date) => {
        // Reset the time portion to 00:00:00.000 in local time
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0);

        setSelectedStartDate(startDate);
    };

    const handleNormalEndDate = (date) => {
        // Reset the time portion to 23:59:59.999 in local time
        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999);
        setSelectedEndDate(endDate);
    };

    // Handler for UTC start date
    const handleUTCStartDate = (date) => {
        // Convert the date to UTC and reset time to 00:00:00.000
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0));
        setSelectedStartDateUTC(date);
    };

    // Handler for UTC end date
    const handleUTCEndDate = (date) => {
        // Convert the date to UTC and reset time to 23:59:59.999
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999));
        setSelectedEndDateUTC(date);
    };

    return (
        <>
            <div style={{ padding: '20px' }}>
                <h5>Normal Date</h5>
                <DatePicker
                    placeholder="Select Start Date"
                    value={selectedStartDate}
                    onChange={(date) => handleNormalStartDate(date)}
                    style={{ marginTop: "10px" }}
                    cleanable={false}
                />
                <div style={{ marginTop: "10px" }}>
                    Selected Normal Start Date: {selectedStartDate ? selectedStartDate.toISOString() : ''}
                </div>
                <div>Start Date : {selectedStartDate.getFullYear() + '-' + (selectedStartDate.getMonth() + 1) + '-' + selectedStartDate.getDate() + 'T00:00:00.000Z'}</div>

                <DatePicker
                    placeholder="Select End Date"
                    value={selectedEndDate}
                    onChange={(date) => handleNormalEndDate(date)}
                    style={{ marginTop: "10px" }}
                    cleanable={false}
                />
                <div style={{ marginTop: "10px" }}>
                    Selected Normal End Date: {selectedEndDate ? selectedEndDate.toISOString() : ''}
                </div>
                <div>Start Date : {selectedEndDate.getFullYear() + '-' + (selectedEndDate.getMonth() + 1) + '-' + selectedEndDate.getDate() + 'T23:59:59.999Z'}</div>
            </div>

            <div style={{ padding: '20px' }}>
                <h5>UTC Date</h5>
                {/* Start Date Picker */}
                <DatePicker
                    placeholder="Select Start Date (UTC)"
                    value={selectedStartDateUTC}
                    onChange={(date) => handleUTCStartDate(date)}
                    style={{ marginTop: '10px' }}
                    cleanable={false}
                />
                <div style={{ marginTop: '10px' }}>
                    Selected UTC Start Date: {selectedStartDateUTC ? selectedStartDateUTC.toISOString() : ''}
                </div>
                <div>
                    Selected Start Date: {new Date(Date.UTC(selectedStartDateUTC.getUTCFullYear(), selectedStartDateUTC.getUTCMonth(), selectedStartDateUTC.getUTCDate(), 0, 0, 0, 0)).toISOString()}
                </div>

                {/* End Date Picker */}
                <DatePicker
                    placeholder="Select End Date (UTC)"
                    value={selectedEndDateUTC}
                    onChange={(date) => handleUTCEndDate(date)}
                    style={{ marginTop: '10px' }}
                    cleanable={false}
                />
                <div style={{ marginTop: '10px' }}>
                    Selected UTC End Date: {selectedEndDateUTC ? selectedEndDateUTC.toISOString() : ''}
                </div>
                <div>
                    Selected End Date: {new Date(Date.UTC(selectedEndDateUTC.getUTCFullYear(), selectedEndDateUTC.getUTCMonth(), selectedEndDateUTC.getUTCDate(), 23, 59, 59, 999)).toISOString()}
                </div>
            </div>
        </>
    );
};

export default UTCvsNormalDate;