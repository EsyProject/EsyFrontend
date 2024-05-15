import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Sidebar,
  Navbar,
  TagCard,
  Input,
  CustomSelect,
} from "../../components/index";
import "material-symbols";
import "./EventCreation.css";

import InputDate from "../../components/InputDate/InputDate";
import InputHour from "../../components/InputHour/InputHour";

const options_area = [
  { value: "", label: "Selecione" },
  { value: "option1", label: "ETS" },
  { value: "option2", label: "BISB" },
  { value: "option3", label: "BD" },
  { value: "option3", label: "PS" },
  { value: "option3", label: "PT" },
  { value: "option3", label: "FCM" },
  { value: "option3", label: "GS" },
];

const options_access = [
  { value: "", label: "Selecione" },
  { value: "option1", label: "Somente membros do setor" },
  { value: "option2", label: "Evento aberto a todos os colaboradores Bosch" },
];

const options_local = [
  { value: "", label: "Selecione" },
  { value: "option1", label: "CA590" },
  { value: "option1", label: "CA560" },
  { value: "option1", label: "CA530" },
  { value: "option1", label: "CA540" },
  { value: "option1", label: "CA536" },
  { value: "option1", label: "CA550" },
  { value: "option1", label: "CA551" },
  { value: "option1", label: "CA129" },
  { value: "option1", label: "CA390" },
  { value: "option1", label: "CA600" },
  { value: "option1", label: "CA400" },
  { value: "option1", label: "CA401" },
  { value: "option1", label: "CA350" },
  { value: "option1", label: "CA370" },
  { value: "option1", label: "CA204" },
  { value: "option1", label: "CA200" },
  { value: "option1", label: "CA360" },
  { value: "option1", label: "CA340" },
  { value: "option1", label: "CA205" },
  { value: "option1", label: "CA220" },
  { value: "option1", label: "CA320" },
  { value: "option1", label: "CA300" },
  { value: "option1", label: "CA325" },
  { value: "option1", label: "CA169" },
  { value: "option1", label: "CA165" },
  { value: "option1", label: "CA341" },
  { value: "option1", label: "CA126" },
  { value: "option1", label: "CA147" },
  { value: "option1", label: "CA148" },
  { value: "option1", label: "CA149" },
  { value: "option1", label: "CA140" },
  { value: "option1", label: "CA160" },
  { value: "option1", label: "CA150" },
  { value: "option1", label: "CA151" },
  { value: "option1", label: "CA100" },
  { value: "option1", label: "CA180" },
  { value: "option1", label: "CA183" },
];

// Fecth API

const EventCreation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventArea, setEventArea] = useState("");
  const [eventAccess, setEventAccess] = useState("");
  const [eventBanner, setEventBanner] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const onChange = (date) => {
    setValue(date);
  };

  const handleFileChange = (e) => {
    setEventBanner(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log({
      eventName,
      eventDescription,
      eventArea,
      eventAccess,
      eventBanner: eventBanner ? eventBanner.name : null,
    });
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
          {
            name: "historic",
            text: "Eventos programados para o mês",
            link: "/historic",
          },
        ]}
      />

      <Sidebar
        activePage="calendar"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="creation-container-main">
        <div className="container-create-event">
          <div className="creation-container-child">
            <h2 className="title">Descrição</h2>
            <p className="subtitle">Informações sobre o evento</p>
            <div className="container-event-description">
              <div className="container-create-event-child">
                <Input
                  label="Nome do evento"
                  id="event_name"
                  placeholder="Ex.: Hackathon 7° Edição"
                  className="input-style"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />

                <CustomSelect
                  label="Área responsável"
                  options={options_area}
                  placeholder="Selecione"
                  className="custom-select-css-w9q2zk-Input2"
                  value={eventArea}
                  onChange={(selectedOption) =>
                    setEventArea(selectedOption.value)
                  }
                />

                <CustomSelect
                  label="Acesso ao evento"
                  options={options_access}
                  placeholder="Selecione"
                  className="custom-select-css-w9q2zk-Input2"
                  value={eventAccess}
                  onChange={(selectedOption) =>
                    setEventAccess(selectedOption.value)
                  }
                />
              </div>
              <div className="container-create-event-child">
                <h4 className="label-textarea">Descrição</h4>
                <textarea
                  className="custom-textarea"
                  placeholder="Este é o texto que aparecerá no feed de atualizações para que os colaboradores possam saber sobre seu evento."
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                ></textarea>

                <h4 className="label-textarea">Imagem para o banner</h4>
                <input
                  type="file"
                  id="image_banner"
                  accept="image/*"
                  className="custom-input input-image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="creation-container-realization">
            <h2 className="title">Realização</h2>
            <p className="subtitle">Informações sobre local e horário</p>
            <div className="container-event-description">
              <div className="container-create-event-child">
                <CustomSelect
                  label="Local"
                  options={options_local}
                  placeholder="Selecione"
                  className="custom-select-css-w9q2zk-Input2"
                />

                <CustomSelect
                  label="Plataforma de transmissão online"
                  options={options_area}
                  placeholder="Selecione"
                  className="custom-select-css-w9q2zk-Input2"
                />
              </div>
              <div className="container-event-details">
                <div className="container-create-event-child">
                  <InputDate
                    label="Data de início"
                    id="event_date_start"
                    placeholder="dd/mm/aaaa"
                    className="input-style"
                  />
                  <InputDate
                    label="Data de término"
                    id="event_date_finish"
                    placeholder="dd/mm/aaaa"
                    className="input-style"
                  />
                </div>
                <div className="container-create-event-child">
                  <InputHour
                    label="Horário de início"
                    id="event_time_start"
                    placeholder="00:00"
                    className="input-style"
                  />
                  <InputHour
                    label="Horário de término"
                    id="event_time_finish"
                    placeholder="00:00"
                    className="input-style"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="creation-container-tickets">
            <h2 className="title">Ingressos</h2>
            <p className="subtitle">
              Quando as reservas de ingressos começam e terminam?
            </p>

            <div className="container-event-description">
              <div className="container-event-details">
                <InputDate
                  label="Data de início"
                  id="event_date_tickets_start"
                  placeholder="dd/mm/aaaa"
                  className="input-style"
                />
                <InputHour
                  label="Horário de início"
                  id="event_time_tickets_start"
                  placeholder="00:00"
                  className="input-style"
                />
              </div>
              <div className="container-event-details">
                <InputDate
                  label="Data de início"
                  id="event_date_tickets_start"
                  placeholder="dd/mm/aaaa"
                  className="input-style"
                />
                <InputHour
                  label="Horário de início"
                  id="event_time_tickets_start"
                  placeholder="00:00"
                  className="input-style"
                />
              </div>
            </div>
          </div>

          <div className="btn-container">
            <button onClick={handleSubmit}>Concluir criação do evento</button>
            <button>Limpar</button>
          </div>
        </div>

        <div className="container-menu-create">
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
