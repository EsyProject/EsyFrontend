import { useState, useEffect } from "react";
import {
  Sidebar,
  Navbar,
  Searchbar,
  MSelect,
  EventTable,
  Pagination,
  EvaluationModal
} from "../../components/index";
import 'react-toastify/dist/ReactToastify.css';
import config from "../../config.json";
import eventsList from "../../components/Searchbar/data";
import "./Historic.css";

const Historic = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // User type access
  const userType = config.userType;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  // Function to convert search input to lowercase
  const searchLowerCase = searchValue.toLowerCase();

  // Filtering events based on search input
  const filteredEvents = eventsList.filter((event) =>
    event.name.toLowerCase().includes(searchLowerCase)
  );

  // updates the totalEvents state
  useEffect(() => {
    setTotalEvents(filteredEvents.length);
  }, [filteredEvents]);

  // Reset offset to page 1 when searchValue changes
  useEffect(() => {
    setOffset(0);
  }, [searchValue]);

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {userType === "admin" && (
        <Navbar
          currentPageIcon="history"
          activePage="historic"
          showNavigationTexts={true}
          navigationText="Histórico"
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

      {userType !== "admin" && (
        <Navbar
          currentPageIcon="history"
          activePage="historic"
          showNavigationTexts={true}
          navigationText="Histórico"
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
        activePage="history"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main-historic">
        <div className="container-historic-content">
          <div className="events-wrapper">
            <section className="line">
              <div className="events amount">
                <h4>
                  Total de eventos <span>{totalEvents}</span>
                </h4>
              </div>

              <div className="events presence">
                <h4>
                  Comparecimentos <span>20</span>
                </h4>
              </div>

              <div className="events absences-event">
                <h4>
                  Faltas <span>4</span>
                </h4>
              </div>
            </section>
            <section className="line">
              <div className="events cancellations">
                <h4>
                  Cancelamentos <span>0</span>
                </h4>
              </div>

              <div className="events time">
                <h4>
                  Tempo de uso <span>2 anos</span>
                </h4>
              </div>
            </section>
          </div>

          <div className="filter-searchbar">
            <Searchbar setSearch={setSearchValue} />

            <MSelect
              options={[
                { value: "opcao1", label: "Todo o período" },
                { value: "opcao2", label: "Último mês" },
                { value: "opcao3", label: "Últimos 3 meses" },
                { value: "opcao4", label: "Últimos 6 meses" },
              ]}
              placeholder="Todo o período"
              label="Período"
              value={selectedOption}
              onChange={handleOptionSelect}
            />
          </div>

          {filteredEvents.length === 0 ? (
            <div className="container-not-found">
              <p>Não existe nenhum evento realizado com esse nome</p>
            </div>
          ) : (
            <>
              <EventTable events={filteredEvents.slice(offset, offset + 5)} onEvaluate={(event) => openModal(event)} />

              <Pagination
                limit={5}
                total={totalEvents}
                offset={offset}
                setOffset={setOffset}
              />
            </>
          )}
        </div>
      </div>

      {modalOpen && <EvaluationModal onClose={closeModal} eventId={"1"} />}
    </div>
  );
};

export default Historic;
