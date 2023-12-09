// App.jsx
import React from 'react';
import CalendarComponent from './CalenderComponent';
import WeeklyScheduleComponent from './WeeklyScheduleComponent ';

const jsonData = [
  {
    Id: 101,
    Name: 'test',
    Date: '2023-07-20',
    Time: '22:30',
  },
  {
    Id: 102,
    Name: 'test 1',
    Date: '2023-07-21',
    Time: '09:00',
  },
  {
    Id: 103,
    Name: 'test 1',
    Date: '2023-07-21',
    Time: '09:00',
  },

  // Add more data as needed
];

const App = () => {
  return (
    <div>
      <CalendarComponent />
      <WeeklyScheduleComponent jsonData={jsonData} />
    </div>
  );
};

export default App;
