import { useState } from "react";
import { Sidebar, Navbar, Timetable, Logout, ProfileModal } from "../../components/index";
import "./Schedule.css"

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

  // teste do modal de logout

  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  
  const openModalLogout = () => {
    setIsModalLogoutOpen(true);
  };

  const closeModalLogout = () => {
    setIsModalLogoutOpen(false);
  };

  // teste do modal de perfil

  const [isModalProfileOpen, setIsModalProfileOpen] = useState(false);

  const openModalProfile = () => {
    setIsModalProfileOpen(true);
  };

  const closeModalProfile = () => {
    setIsModalProfileOpen(false);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="calendar_month"
        activePage="schedule"
        showNavigationTexts={true}
        navigationText="Meus eventos"
        tabs={[
          { name: "schedule", text: "Próximos Eventos", link: "/schedule" },
          { name: "historic", text: "Histórico de eventos", link: "/historic" },
          { name: "tickets", text: "Tickets", link: "/tickets" }
        ]}
      />

      <Sidebar
        activePage="calendar"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <h1 className="schedule-title">Minha agenda</h1>
        <p className="schedule-subtitle">Eventos programados para este mês</p>
        <Timetable events={events} />

        {/* colocar isso na sidebar, na parte do logout */}
        <button onClick={openModalLogout}>Logout</button>
        {isModalLogoutOpen && <Logout onClose={closeModalLogout} />}
        
        {/* colocar isso na sidebar, na parte do perfil */}
        <button onClick={openModalProfile}>Profile</button>
        {isModalProfileOpen && <ProfileModal onClose={closeModalProfile} />}
      </div>
    </div>
  );
};

export default Schedule;
