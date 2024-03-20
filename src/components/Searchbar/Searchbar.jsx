import eventsList from "./data";

const Searchbar = () => {
  return (
    <div>
      <input type="search" />

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
