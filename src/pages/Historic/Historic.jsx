import { useState } from "react";
import { Sidebar, Navbar, Searchbar, MSelect } from "../../pages/index";
import "./Historic.css";

const Historic = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar currentPageIcon="history" activePage="historic" />

      <Sidebar
        activePage="history"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <div className="events-wrapper">
          <div className="events amount">
            <h4>
              Total de eventos <span>24</span>
            </h4>
          </div>

          <div className="events presence">
            <h4>
              Comparecimentos <span>20</span>
            </h4>
          </div>

          <div className="events absences">
            <h4>
              Faltas <span>4</span>
            </h4>
          </div>

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
        </div>

        <div className="filter-searchbar">
          <Searchbar />

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
      </div>
    </div>
  );
};

export default Historic;
