// WeeklyScheduleComponent.jsx
import React from 'react';

const WeeklyScheduleComponent = ({ jsonData }) => {
    return (
        <div id="weeklySchedule">
            {jsonData.map((item, index) => (
                <div key={index} className="schedule-item">
                    <div className="week-name">{item.day}</div>
                    <div className="schedule-details">
                        <input type="checkbox" id={`checkbox-${item.Id}`} value={item.Date} />
                        <label htmlFor={`checkbox-${item.Id}`}>
                            {`${item.Date} - ${item.Time} (${item.Name})`}
                        </label>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default WeeklyScheduleComponent;

