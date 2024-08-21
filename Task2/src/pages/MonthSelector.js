import React from 'react';

const MonthSelector = ({ selectedMonth, onMonthChange }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2025];

  const handleChange = (e) => {
    const [year, monthIndex] = e.target.value.split('-');
    const newMonth = new Date(parseInt(year), parseInt(monthIndex));
    onMonthChange(newMonth);
  };

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"center", 
        marginTop: "16px",
        marginBottom: "16px",
        paddingRight: "40px",
        marginLeft: "8px",
        marginRight: "8px",
      }}
    >
      <select
        value={`${selectedMonth.getFullYear()}-${selectedMonth.getMonth()}`}
        onChange={handleChange}
        style={{
          paddingRight: "24px",
          paddingLeft: "24px",
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "transparent",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "28px", 
          color: "rgb(107 ,114 ,128,)",
          minWidth: "100px"
        }}
      >
        {months.map((month, index) => (
          <option key={month} value={`${selectedMonth.getFullYear()}-${index}`}>{month}</option>
        ))}
      </select>

      <select
        value={`${selectedMonth.getFullYear()}-${selectedMonth.getMonth()}`}
        onChange={handleChange}
        style={{
          paddingRight: "24px",
          paddingLeft: "24px",
          paddingTop: "16px",
          paddingLeft: "16px",
          backgroundColor: "transparent",
          fontWeight: 700,
          fontSize:"20px",
          lineHeight: "28px",
          color: "rgb(107 114 128)"
        }}
      >
        {years.map(year => (
          <option key={year} value={`${year}-0`}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
