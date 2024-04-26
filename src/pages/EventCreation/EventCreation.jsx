/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Sidebar, Navbar, TagCard } from "../../components/index";
import "material-symbols";
import './EventCreation.css'

const EventCreation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [value, setValue] = useState(new Date());

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const onChange = (date) => {
        setValue(date);
    };

    return (
        <div className={`creation-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <Navbar
                currentPageIcon="calendar_add_on"
                activePage="create"
                navigationText="Novo evento"
                showNavigationTexts={true}
                tabs={[
                    { name: "create", text: "Criação de novo evento", link: "/create" },
                    { name: "historic", text: "Eventos programados para o mês", link: "/historic" }
                ]}
            />

            <Sidebar
                activePage="calendar"
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            <div className="creation-container-main">
                <div className="container-register">
                    <input></input>

                    <input></input>

                    <input></input>
                </div>

                <div className="container-menu">
                    <div className="container-calendar">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                    <TagCard
                        date="22 - 26 Fev 2024"
                        title="Jornada do Conhecimento"
                        description="Evento que ocorre anulmente e visa promover uma visão ampla acerca das diferentes áreas da... "
                        area="ETS - DS"
                    />

                    <TagCard
                        date="22 - 26 Fev 2024"
                        title="Jornada do Conhecimento"
                        description="Evento que ocorre anulmente e visa promover uma visão ampla acerca das diferentes áreas da... "
                        area="ETS - DS"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventCreation;
