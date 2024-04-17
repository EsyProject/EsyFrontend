import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";
import AreaModal from "../../components/AreaModal/AreaModal";
import "./Reservation.css"

const Reservation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // teste do modal de informações da área

  const [isModalAreaOpen, setIsModalAreaOpen] = useState(false);
  
  const openModalArea = () => {
    setIsModalAreaOpen(true);
  };

  const closeModalArea = () => {
    setIsModalAreaOpen(false);
  };

  return (
    <div className={`feed-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="home"
        activePage="description"
        navigationText="Home"
        showNavigationTexts={true}
        tabs={[
          { name: "feed", text: "Feed de eventos", link: "/feed" },
          { name: "description", text: "Descrição", link: "/description" },
        ]}
      />

      <Sidebar
        activePage="home"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <h1 className="description-title">Nome do evento</h1>
        <p className="description-subtitle">descrição</p>

        {/* link para acessar informações da área */}
        <button onClick={openModalArea}>Área</button>
        {isModalAreaOpen && <AreaModal onClose={closeModalArea} />}
      </div>
    </div>
  );
};

export default Reservation;
