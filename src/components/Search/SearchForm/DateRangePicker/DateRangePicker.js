
/* 

  https://kiarash-z.github.io/react-modern-calendar-datepicker/

*/

import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import './DateRangePicker.css';

// import the custom danish labels
import dkLocale from './dkLocale'

const DateRangePicker = props => {
  
  const selectedDayRange = {
    from: props.from,
    to: props.to
  }

  return (
    <Calendar
      value={selectedDayRange}
      onChange={ e => props.onDateClick(e) }
      inputPlaceholder="Select a day range"
      locale={dkLocale} // custom locale object
      wrapperClassName="datepicker-wrapper"
      calendarClassName="responsive-calendar" 
      colorPrimary="#959595" 
      colorPrimaryLight="#F7F5F0" 
      calendarTodayClassName="custom-today-day" 
      shouldHighlightWeekends={false}
      minimumDate={utils().getToday()}
    />
  );
};

export default DateRangePicker;




