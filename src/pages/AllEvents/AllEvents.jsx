import { useEffect, useState } from "react";
import { useAllEvents } from "../../services/queries";
import 'react-toastify/dist/ReactToastify.css';
import {
  Sidebar,
  Navbar
} from "../../components/index";
import "material-symbols";
import "./AllEvents.css";

import CardView from "../../components/CardView/CardView";

const AllEvents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: eventsData, isLoading, isError } = useAllEvents();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    console.log("Events data:", eventsData);
  }, [eventsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading events: {isError.message}</div>;
  }

  const eventCards = eventsData.content.map((event, index) => (
    <CardView
      key={index}
      nameOfEvent={event.nameOfEvent}
      initialDate={event.initialDate}
      finishDate={event.finishDate}
      initialTime={event.initialTime}
      finishTime={event.finishTime}
      localEvent={event.localEvent}
      responsible_area={event.responsible_area}
      description={event.description}
      img={event.imgUrl[0]}
    />
  ));

  return (
    <div className={`creation-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="calendar_add_on"
        activePage="allevents"
        navigationText="Eventos"
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
        activePage="apps"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="all-events-container-main">
        <p className="all-events-title">Todos os eventos</p>
        <div className="all-events-content">{eventCards}</div>
      </div>
    </div>
  );
};

export default AllEvents;
