/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Sidebar, Navbar, TagCard, ColumnsChart } from "../../components/index";
import "material-symbols";
import "./Dashboard.css";
import { useAverageOfEvent } from "../../services/queries";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, onChange] = useState(new Date());

  const { data: averageData } = useAverageOfEvent("1");

  const [averageRating, setAverageRating] = useState(null);

  // Update average score state when data is loaded
  useEffect(() => {
    if (averageData) {
      setAverageRating(averageData.average);
    }
  }, [averageData]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        <span key={i} className="material-symbols-rounded">
          grade
        </span>
      );
    }
    return icons;
  };

  const { average } = averageRating || {};

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="dashboard"
        activePage="dashboard"
        navigationText="Dashboard"
        showNavigationTexts={true}
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
        activePage="dashboard"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="dashboard-container-main">
        <div className="dashboard-content">
          <div className={`dashboard-columns ${menuOpen ? "menu-open" : ""}`}>
            <div
              className={`left-column-dashboard ${menuOpen && sidebarOpen ? "menu-open" : ""
                }`}
            >
              <div className="general-analysis">
                <h2>Análise quantitativa geral</h2>
                <div className="metrics">
                  <div className="metric registrations">
                    <div className="rectangle-metric rectangle-registrations"></div>
                    <p>Inscrições</p>
                    <h1>102</h1>
                  </div>
                  <div className="metric participations">
                    <div className="rectangle-metric rectangle-participations"></div>
                    <p>Participações</p>
                    <h1>98</h1>
                  </div>
                  <div className="metric absences">
                    <div className="rectangle-metric rectangle-absences"></div>
                    <p>Ausências</p>
                    <h1>4</h1>
                  </div>
                  <div className="metric success-rate">
                    <div className="rectangle-metric rectangle-success-rate"></div>
                    <p>Taxa de sucesso</p>
                    <h1>99%</h1>
                  </div>
                </div>
              </div>

              <div className="participant-reviews">
                <div className="reviews-title">
                  <h2>Avaliações dos participantes</h2>{" "}
                  <span>(88 avaliações)</span>
                </div>

                <div className="participant-reviews-main">
                  <div className="container-reviews">
                    <div className="event-reviews">
                      <div className="event-note">
                        <div className="note-content">
                          <h3>Nota do evento</h3>
                          <div className="rate">
                            <h1>
                              {average
                                ? average
                                : "5"}
                            </h1>
                            <span className="material-symbols-rounded">
                              grade
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="evaluations">
                        <div className="row">
                          <section>
                            <div className="profile">
                              <div className="circle">
                                <p>IR</p>
                              </div>
                              <div className="comment-header">
                                <div className="row">
                                  <p className="name">Isabela Rodrigues</p>
                                  <p className="month">3 meses atrás</p>
                                </div>
                                <div className="stars">{renderIcons(5)}</div>
                              </div>
                            </div>
                            <p>
                              "Evento excelente! Ótimas palestras e networking
                              incrível"
                            </p>
                          </section>
                        </div>

                        <div className="row">
                          <section>
                            <div className="profile">
                              <div className="circle">
                                <p>LO</p>
                              </div>
                              <div className="comment-header">
                                <div className="row">
                                  <p className="name">Lucas Oliveira</p>
                                  <p className="month">3 meses atrás</p>
                                </div>
                                <div className="stars">{renderIcons(5)}</div>
                              </div>
                            </div>
                            <p>
                              "Adorei o evento! A organização foi impecável e
                              aprendi muito com os workshops"
                            </p>
                          </section>
                        </div>

                        <div className="row">
                          <section>
                            <div className="profile">
                              <div className="circle">
                                <p>CS</p>
                              </div>
                              <div className="comment-header">
                                <div className="row">
                                  <p className="name">Carolina Santos</p>
                                  <p className="month">3 meses atrás</p>
                                </div>
                                <div className="stars">{renderIcons(5)}</div>
                              </div>
                            </div>
                            <p>
                              "Evento fantástico! As atividades foram muito
                              envolventes e as discussões foram extremamente
                              enriquecedoras"
                            </p>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`highlights ${menuOpen && !sidebarOpen ? "menu-open" : ""
                      }`}
                  >
                    <h2>Pontos de destaque</h2>

                    <ColumnsChart />
                  </div>

                  <div className="improvement-suggestions">
                    <h2>Sugestões de melhorias</h2>

                    <div className="sugestions">
                      <div className="suggestion">
                        <h5>Sugestão 1 - 10/02/2024</h5>
                        <p>
                          Seria interessante diversificar os palestrantes
                          convidados, incluindo vozes de diferentes origens e
                          áreas de especialização. Isso poderia enriquecer ainda
                          mais o conteúdo do evento e oferecer perspectivas
                          variadas sobre os temas abordados.
                        </p>
                      </div>

                      <div className="suggestion">
                        <h5>Sugestão 2 - 13/02/2024</h5>
                        <p>
                          Sugiro intensificar os esforços de divulgação
                          pré-evento, explorando diferentes canais de
                          comunicação e plataformas online para alcançar um
                          público mais amplo. Isso poderia aumentar a
                          participação e garantir que o evento alcance seu
                          potencial máximo de engajamento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`container-button-menu ${menuOpen ? "menu-container-open" : "menu-container-closed"
                }`}
            >
              <div className="button-container-dashboard">
                <button onClick={toggleMenu}>
                  Eventos do mês
                  <span className="material-symbols-rounded">
                    keyboard_double_arrow_right
                  </span>
                </button>
              </div>

              <div className="container-menu">
                <div className="container-calendar">
                  <Calendar onChange={onChange} value={value} />
                </div>
                <TagCard
                  date="22 - 29 Jul 2024"
                  title="Fórum de Talentos"
                  description="Evento anual que proporciona aos estagiários a chance de apresentarem seus projetos..."
                  area="GS"
                />

                <TagCard
                  date="01 - 05 Ago 2024"
                  title="Tech Lunch"
                  description="Encontro voltado aos desenvolvedores de software e tecnologia, com foco em discutir temas técnicos e networking interno."
                  area="BD"
                />

                <TagCard
                  date="16 - 17 Ago 2024"
                  title="Workshop"
                  description="Evento que traz a proposta de vivenciar ainda mais a Melhoria Contínua de processos aliada a um universo de soluções e tecnologias."
                  area="ETS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;