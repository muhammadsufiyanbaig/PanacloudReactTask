import React, { useState } from 'react';
import MonthSelector from './MonthSelector';
import CalendarMonth from './CalendarMonth';

const CalendarApp = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
  };

  return (
    <div className="container"
    style={{
      marginTop: {
        xs: "10px",
        sm: " 14px",
        md: '20px',
        lg: " 26px",
        xl:" 32px"
      },
      marginLeft: {
        xs: "10px",
        sm: " 14px",
        md: '20px',
        lg: " 26px",
        xl:" 32px"
      }
    }}
    >
      <MonthSelector selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
      <CalendarMonth selectedMonth={selectedMonth} />
      
    </div>
  );
};

export default CalendarApp;
