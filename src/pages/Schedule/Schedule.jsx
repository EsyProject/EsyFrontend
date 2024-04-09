import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";
import Timetable from "../../components/Timetable/Timetable";

const Schedule = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const events = [
    {
      title: "Fórum da Sustentabilidade",
      start: new Date(2024, 3, 7, 10, 0), // ano, mês (0-11), dia, hora, minuto
      end: new Date(2024, 3, 7, 12, 0),
    },
    {
      title: "Ciclo de Saúde Mental",
      start: new Date(2024, 3, 10, 15, 0),
      end: new Date(2024, 3, 10, 17, 0),
    },
  ];

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="calendar_month"
        activePage="schedule"
        showNavigationTexts={true}
        navigationText="Meus eventos"
        feedText="Próximos eventos"
        feedLink="/schedule"
        secondText="Histórico de eventos"
        secondLink="/historic"
      />

      <Sidebar
        activePage="calendar"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <h1>Meu Calendário</h1>
        <Timetable events={events} />
      </div>
    </div>
  );
};

export default Schedule;
