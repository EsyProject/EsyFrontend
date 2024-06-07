import { useState } from "react";
import config from "../../config.json";
import { Sidebar, Navbar, Timetable } from "../../components/index";
import "./Schedule.css"

const Schedule = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // User type access
  const userType = config.userType;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const events = [
    {
      title: "Hackathon",
      start: new Date(2024, 5, 17), // ano, mês (0-11), dia
      end: new Date(2024, 5, 22),
      description: "Evento que Reúne programadores ligados ao desenvolvimento de software onde tem a duração de uma semana.",
      area: "ETS - DS"
    },
    {
      title: "Tech Lunch",
      start: new Date(2024, 5, 13),
      end: new Date(2024, 5, 13),
      description: "Encontro voltado aos desenvolvedores de software e tecnologia, com foco em discutir temas técnicos e networking interno.",
      area: "BD - DEV"
    },
    {
      title: "Workshop",
      start: new Date(2024, 5, 28),
      end: new Date(2024, 5, 28),
      description: "Evento que traz a proposta de vivenciar ainda mais a Melhoria Contínua de processos aliada a um universo de soluções e tecnologias.",
      area: "GS - LA"
    },
    {
      title: "Fórum de Talentos",
      start: new Date(2024, 5, 11),
      end: new Date(2024, 5, 11),
      description: "Evento que traz a proposta de vivenciar ainda mais a Melhoria Contínua de processos aliada a um universo de soluções e tecnologias.",
      area: "GS - LA"
    },
  ];

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {userType === "admin" && (
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
      )}

      {userType !== "admin" && (
        <Navbar
          currentPageIcon="calendar_month"
          activePage="calendar"
          showNavigationTexts={true}
          navigationText="Agenda"
          tabs={[
            {
              name: "calendar",
              text: "Agenda",
              link: "/schedule",
            },
            {
              name: "historic",
              text: "Histórico de eventos",
              link: "/historic",
            },
            {
              name: "tickets",
              text: "Tickets",
              link: "/tickets",
            },
          ]}
        />
      )}

      <Sidebar
        activePage="schedule"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main-schedule">
        <div className="container-schedule-content">
          <h1 className="schedule-title">Minha agenda</h1>
          <p className="schedule-subtitle">Eventos programados para este mês</p>
          <Timetable events={events} className="rbc-background-event" data-area={events.area} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
