import { useState } from "react";
import { Sidebar, Navbar, EventCard } from "../../pages/index";
import AreaModal from "../../components/AreaModal/AreaModal";
import "./Reservation.css"

// apenas para fins de teste
import { CiClock2 } from "react-icons/ci";

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
        <div className="container-description-child">
          <EventCard
            audience="Público Principal - Digital Solutions e Mecatrônica"
            title="hackaton"
            subtitle="7ª Edição"
            date="10/07/2024"
            time="09h00"
            location="Ca300"
          />
          <div>
            <h1 className="description-title">Hackathon 7ª Edição</h1>
            <p className="description-content-text">Hackathon é nosso evento semestral focado nas áreas
              de tecnologia e inovação e conta com os aprendizes dos cursos de Digital Solutions e
              Mecatrônica. Durante uma semana os aprendizes desenvolvem projetos reais que buscam
              trazer melhorias internas para algum processo ou setor da Bosch Campinas. Durante
              este período as equipes apredem de forma muito rápida e eficiente a trabalharem de
              modo ágil e exploram sua criatividade e capacidades técnicas e socioemocionais.
              Venha participar da apresentação dos projetos e descobrir pessoalmente o quão
              talentosos são os nossos jovens.</p>
            <div className="description-infos">
              <div>
                <CiClock2 />
                <p>10/07/2024</p>
              </div>
              <div>
                <CiClock2 />
                <p>09:00 às 15:00</p>
              </div>
              <div>
                <CiClock2 />
                <p>Ca300</p>
              </div>
            </div>
            <div className="btn-container">

              {/* link para acessar informações da área */}
              <button onClick={openModalArea}>Saiba mais sobre a área do evento</button>
              {isModalAreaOpen && <AreaModal onClose={closeModalArea} />}
            </div>
          </div>


          <div></div>


        </div>
          <h1 className="description-title">Edições anteriores</h1>
          <p className="description-content-text">Confira os projetos que conquistaram o pódio nas edições anteriores do Hackathon</p>
      </div>
    </div>
  );
};

export default Reservation;
