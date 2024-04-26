/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Sidebar, Navbar, TagCard, Input, ButtonLink, CustomSelect } from "../../components/index";
import "material-symbols";
import './EventCreation.css'

const options_area = [
    { value: "", label: "Selecione" },
    { value: "option1", label: "ETS" },
    { value: "option2", label: "BISB" },
    { value: "option3", label: "BD" },
];

const options_access = [
    { value: "", label: "Selecione" },
    { value: "option1", label: "Somente membros do setor" },
    { value: "option2", label: "Evento aberto a todos os colaboradores Bosch" },
];

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
                <div className="container-create-event">
                    <h2 className='title'>Descrição</h2>
                    <p className='subtitle'>Informações sobre o evento</p>
                    <Input label='Nome do evento' id='event_name' placeholder='Ex.: Hackathon 7° Edição' className="input-style" />

                    <CustomSelect
                        label="Área responsável"
                        options={options_area}
                        placeholder="Selecione"
                        className="custom-select-css-w9q2zk-Input2"
                    />

                    <CustomSelect
                        label="Acesso ao evento"
                        options={options_access}
                        placeholder="Selecione"
                        className="custom-select-css-w9q2zk-Input2"
                    />
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