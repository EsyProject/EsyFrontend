import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Timetable.css'

const localizer = momentLocalizer(moment);

const Timetable = ({ events }) => (
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ margin: '0'}}
    />
  </div>
);

export default Timetable;
