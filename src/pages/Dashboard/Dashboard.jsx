import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="dashboard"
        activePage="dashboard"
        navigationText="Dashboard"
        showNavigationTexts={false}
      />

      <Sidebar
        activePage="dashboard"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="dashboard-container-main">
        <div className="general-analysis">
          <h2>Análise quantitativa geral</h2>
          <div className="metrics">
            <div className="metric registrations">
              <div className="rectangle-metric"></div>
              <p>Inscrições</p>
              <h1>102</h1>
            </div>
            <div className="metric participations">
              <div className="rectangle-metric"></div>
              <p>Participações</p>
              <h1>98</h1>
            </div>
            <div className="metric absences">
              <div className="rectangle-metric"></div>
              <p>Ausências</p>
              <h1>4</h1>
            </div>
            <div className="metric success-rate">
              <div className="rectangle-metric"></div>
              <p>Taxa de sucesso</p>
              <h1>99%</h1>
            </div>
          </div>
        </div>

        <div className="participant-reviews">
          <h2>Avaliações dos participantes</h2> <span>(88 avaliações)</span>
          <div className="container-reviews">
            <div className="event-reviews">
              <div className="event-note">
                <div className="note-content">
                  <h2>Nota do evento</h2>
                  <h4>4,98</h4>
                  <span>★</span>
                </div>
              </div>
              <div className="evaluations">
                <div className="evaluation">
                  <div className="user-info">
                    <div className="avatar">
                      <h4>IR</h4>
                    </div>
                    <div className="user-details">
                      <h5>Isabela Rodrigues</h5>
                      <span>3 meses atrás</span>
                    </div>
                  </div>
                  <div className="rating">★★★★★</div>
                  <p>
                    Evento excelente! Ótimas palestras e networking incrível.
                  </p>
                </div>

                <div className="evaluation">
                  <div className="user-info">
                    <div className="avatar">
                      <h4>LO</h4>
                    </div>
                    <div className="user-details">
                      <h5>Lucas Oliveira</h5>
                      <span>3 meses atrás</span>
                    </div>
                  </div>
                  <div className="rating">★★★★★</div>
                  <p>
                    Adorei o evento! A organização foi impecável e aprendi muito
                    com os workshops
                  </p>
                </div>

                <div className="evaluation">
                  <div className="user-info">
                    <div className="avatar">
                      <h4>CS</h4>
                    </div>
                    <div className="user-details">
                      <h5>Carolina Santos</h5>
                      <span>3 meses atrás</span>
                    </div>
                  </div>
                  <div className="rating">★★★★★</div>
                  <p>
                    Evento fantástico! As atividades foram muito envolventes e
                    as discussões foram extremamente enriquecedoras
                  </p>
                </div>
              </div>
            </div>

            <div className="highlights">
              <h2>Pontos de destaque</h2>
            </div>
          </div>
        </div>

        <div className="improvement-suggestions">
          <h2>Sugestões de melhorias</h2>

          <div className="sugestions">
            <div className="suggestion">
              <h5>Sugestão 1 - 10/02/2024</h5>
              <p>
                Seria interessante diversificar os palestrantes convidados,
                incluindo vozes de diferentes origens e áreas de especialização.
                Isso poderia enriquecer ainda mais o conteúdo do evento e
                oferecer perspectivas variadas sobre os temas abordados.
              </p>
            </div>

            <div className="suggestion">
              <h5>Sugestão 2 - 13/02/2024</h5>
              <p>
                Sugiro intensificar os esforços de divulgação pré-evento,
                explorando diferentes canais de comunicação e plataformas online
                para alcançar um público mais amplo. Isso poderia aumentar a
                participação e garantir que o evento alcance seu potencial
                máximo de engajamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="container-next-events">
          <h4>Fevereiro de 2024</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
