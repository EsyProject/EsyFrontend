// eslint-disable-next-line no-unused-vars
import React from "react";

const EventTable = ({ events }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome do Evento</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Local</th>
          <th>Área</th>
          <th>Presença</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.time}</td>
            <td>{event.local}</td>
            <td>{event.area}</td>
            <td>{event.presence}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
