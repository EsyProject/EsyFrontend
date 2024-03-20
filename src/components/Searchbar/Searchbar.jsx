import { useState } from "react";
import eventsList from "./data";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
          {eventsList.map((event, index) => (
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
    </div>
  );
};

export default Searchbar;
