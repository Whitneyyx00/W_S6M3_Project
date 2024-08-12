import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        onDateChange(e.target.value);
    };

    return (
        <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
       />
    );
};

export default DatePicker;