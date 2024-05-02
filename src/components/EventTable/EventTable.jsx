import PropTypes from "prop-types";
import "./EventTable.css";

const EventTable = ({ events }) => {
  const getIcon = (evaluation) => {
    return evaluation === "true" ? (
      <i className="material-icons green">check_box</i>
    ) : (
      <span className="material-icons red">disabled_by_default</span>
    );
  };

  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th className="th-event-name">Nome do Evento</th>
            <th className="th-event-date">Data</th>
            <th className="th-event-time">Horário</th>
            <th className="th-event-local">Local</th>
            <th className="th-event-area">Área</th>
            <th className="th-event-presence">Presença</th>
            <th className="th-event-evaluation">Avaliação</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td className="td-event-name">{event.name}</td>
              <td className="td-event-date">{event.date}</td>
              <td className="td-event-time">{event.time}</td>
              <td className="td-event-local">{event.local}</td>
              <td className="td-event-area">
                <div className="container-event-area" data-area={event.area}>
                  {event.area}
                </div>
              </td>
              <td className="td-event-presence">
                <div
                  className="container-event-presence"
                  data-presence={event.presence}
                >
                  {event.presence}
                </div>
              </td>
              <td className="td-event-evaluation">
                {getIcon(event.evaluation)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes validation
EventTable.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      local: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      presence: PropTypes.string.isRequired,
      evaluation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventTable;
