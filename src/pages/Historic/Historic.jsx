import { useState } from "react";
import { Sidebar, Navbar, Searchbar } from "../../pages/index";
import "./Historic.css";

const Historic = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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

          <div className="select-wrapper">
            <span className="material-symbols-outlined">calendar_month</span>
            <select>
              <option value="opcao1">Todo o período</option>
              <option value="opcao2">Último mês</option>
              <option value="opcao3">Últimos 3 meses</option>
              <option value="opcao4">Últimos 6 meses</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historic;
