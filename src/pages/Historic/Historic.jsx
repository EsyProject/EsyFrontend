import { useState } from "react";
import { Sidebar } from "../../pages/index";
import "./Historic.css";

const Historic = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="container-main-historic">
        <h1>Conteudo aqui</h1>
        <span>aleatorio</span>
      </div>
    </div>
  );
};

export default Historic;
