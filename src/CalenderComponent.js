// CalendarComponent.jsx
import React, { useState, useEffect } from 'react';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timezone, setTimezone] = useState('UTC+0');
    const [weeklySchedule, setWeeklySchedule] = useState([]);

    useEffect(() => {
        // Load initial weekly schedule
        loadWeeklySchedule();
    }, [selectedDate, timezone]);

    const loadWeeklySchedule = () => {
        // Implement logic to fetch weekly schedule based on selectedDate and timezone
        // This is a placeholder; replace it with your actual data fetching logic
        const mockWeeklySchedule = [
            { day: 'Monday', time: '8AM - 5PM' },
            { day: 'Tuesday', time: '8AM - 5PM' },
            { day: 'Wednesday', time: '8AM - 5PM' },
            { day: 'Thursday', time: '8AM - 5PM' },
            { day: 'Friday', time: '8AM - 5PM' },
        ];

        setWeeklySchedule(mockWeeklySchedule);
    };

    const handleDateChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };

    const handlePrevWeek = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 7);
        setSelectedDate(newDate);
    };

    const handleNextWeek = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 7);
        setSelectedDate(newDate);
    };

    const handleTimezoneChange = (event) => {
        setTimezone(event.target.value);
    };

    return (
        <div>
            <div className="flex-container">
                <button onClick={handlePrevWeek}>Previous</button>
                <div className="date-container">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
                </div>
                <button onClick={handleNextWeek}>Next</button>
            </div>

            <div className="timezone-container">
                <label htmlFor="timezone">Timezone:</label>
                <select id="timezone" value={timezone} onChange={handleTimezoneChange}>
                    <option value="UTC+0">UTC+0</option>
                    <option value="UTC+3">UTC+3</option>
                </select>
            </div>

            <div id="weeklySchedule">
                <h2>Weekly Schedule</h2>
                {weeklySchedule.map((item, index) => (
                    <div key={index}>
                        <div><strong>{item.day}:</strong></div>
                        <div>{item.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarComponent;


