import { useState } from "react";
import { Sidebar, Navbar, Timetable } from "../../components/index";
import "./Schedule.css"

const Schedule = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const events = [
    {
      title: "Fórum da Sustentabilidade",
      start: new Date(2024, 4, 7, 10, 0), // ano, mês (0-11), dia, hora, minuto
      end: new Date(2024, 4, 7, 12, 0),
    },
    {
      title: "Ciclo de Saúde Mental",
      start: new Date(2024, 4, 10, 15, 0),
      end: new Date(2024, 4, 10, 17, 0),
    },
  ];

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="calendar_month"
        activePage="schedule"
        showNavigationTexts={true}
        navigationText="Agenda"
        tabs={[
          { name: "create", text: "Criação de novo evento", link: "/create" },
          {
            name: "schedule",
            text: "Agenda",
            link: "/schedule",
          },
          {
            name: "dashboard",
            text: "Dashboard",
            link: "/dashboard",
          },
          {
            name: "allevents",
            text: "Todos os eventos",
            link: "/allevents",
          },
        ]}
      />

      <Sidebar
        activePage="schedule"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main-schedule">
        <div className="container-schedule-content">
          <h1 className="schedule-title">Minha agenda</h1>
          <p className="schedule-subtitle">Eventos programados para este mês</p>
          <Timetable events={events} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
