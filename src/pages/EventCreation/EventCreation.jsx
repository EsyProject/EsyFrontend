import { useEffect, useState } from "react";
import { useCreateEvent, useCreateTicket } from "../../services/mutations";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import {
  Sidebar,
  Navbar,
  TagCard,
  Input,
  CustomSelect,
} from "../../components/index";
import "material-symbols";
import "./EventCreation.css";

const options_area = [
  { value: "", label: "Selecione" },
  { value: "ETS", label: "ETS" },
  { value: "BISB", label: "BISB" },
  { value: "BD", label: "BD" },
  { value: "PS", label: "PS" },
  { value: "PT", label: "PT" },
  { value: "FCM", label: "FCM" },
  { value: "GS", label: "GS" },
];

const options_local = [
  { value: "", label: "Selecione" },
  { value: "CA590", label: "CA590" },
  { value: "CA560", label: "CA560" },
  { value: "CA530", label: "CA530" },
  { value: "CA540", label: "CA540" },
  { value: "CA536", label: "CA536" },
  { value: "CA550", label: "CA550" },
  { value: "CA551", label: "CA551" },
  { value: "CA129", label: "CA129" },
  { value: "CA390", label: "CA390" },
  { value: "CA600", label: "CA600" },
  { value: "CA400", label: "CA400" },
  { value: "CA401", label: "CA401" },
  { value: "CA350", label: "CA350" },
  { value: "CA370", label: "CA370" },
  { value: "CA204", label: "CA204" },
  { value: "CA200", label: "CA200" },
  { value: "CA360", label: "CA360" },
  { value: "CA340", label: "CA340" },
  { value: "CA205", label: "CA205" },
  { value: "CA220", label: "CA220" },
  { value: "CA320", label: "CA320" },
  { value: "CA300", label: "CA300" },
  { value: "CA325", label: "CA325" },
  { value: "CA169", label: "CA169" },
  { value: "CA165", label: "CA165" },
  { value: "CA341", label: "CA341" },
  { value: "CA126", label: "CA126" },
  { value: "CA147", label: "CA147" },
  { value: "CA148", label: "CA148" },
  { value: "CA149", label: "CA149" },
  { value: "CA140", label: "CA140" },
  { value: "CA160", label: "CA160" },
  { value: "CA150", label: "CA150" },
  { value: "CA151", label: "CA151" },
  { value: "CA100", label: "CA100" },
  { value: "CA180", label: "CA180" },
  { value: "CA183", label: "CA183" },
];

const EventCreation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const createEventMutation = useCreateEvent();
  const createTicketMutation = useCreateTicket();
  const [eventBanner, setEventBanner] = useState(null);

  useEffect(() => {}, [errors]);

  const handleFileChange = (e) => {
    setEventBanner(e.target.files[0]);
  };

  const handleCreateEvent = (data) => {
    const formData = new FormData();

    formData.append("description", data.description);
    formData.append("finishDate", data.finishDate);
    formData.append("finishTime", data.finishTime);
    formData.append("initialDate", data.initialDate);
    formData.append("initialTime", data.initialTime);
    formData.append("localEvent", data.localEvent);
    formData.append("nameOfEvent", data.nameOfEvent);
    formData.append("responsible_area", data.responsible_area);

    if (data.imgUrl && data.imgUrl.length > 0) {
      for (let i = 0; i < data.imgUrl.length; i++) {
        formData.append("images", data.imgUrl[i]);
      }
    }

    if (eventBanner) {
      formData.append("imgUrl", eventBanner);
    }

    createEventMutation.mutate(formData, {
      onSuccess: (eventResponse) => {
        console.log("Evento criado com sucesso", eventResponse);
        
        const ticketData = {
          eventId: eventResponse.data.id, 
          initialDateTicket: data.initialDateTicket,
          initialTimeTicket: data.initialTimeTicket,
          finishDateTicket: data.finishDateTicket,
          finishTimeTicket: data.finishTimeTicket,
        };

        handleCreateTicket(ticketData);
      },
      onError: (error) => {
        console.log("Erro ao criar evento", error);
      },
    });
  };

  const handleCreateTicket = (data) => {
    console.log("Creating ticket with data:", data);
    createTicketMutation.mutate(data, {
      onSuccess: () => {
        console.log("Ticket criado com sucesso");
      },
      onError: (error) => {
        console.log("Erro ao criar ticket", error);
      },
    });
  };


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <form onSubmit={handleSubmit(handleCreateEvent)}>
          <div className="container-create-event">
            <div className="creation-container-child">
              <h2 className="title">Descrição</h2>
              <p className="subtitle">Informações sobre o evento</p>
              <div className="container-event-description">
                <div className="container-create-event-child">
                  <Input
                    label="Nome do evento"
                    id="nameOfEvent"
                    placeholder="Ex.: Hackathon 7° Edição"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />

                  <CustomSelect
                    label="Área responsável"
                    id="responsible_area"
                    options={options_area}
                    placeholder="Selecione"
                    className="custom-select-css-w9q2zk-Input2"
                    onChange={(selectedOption) =>
                      setValue("responsible_area", selectedOption)
                    }
                  />

                  <Input
                    label="Imagem para o banner"
                    type="file"
                    id="imgUrl"
                    accept="image/*"
                    onChange={handleFileChange}
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />
                </div>
                <div className="container-create-event-child">
                  <h4 className="label-textarea">Descrição</h4>
                  <textarea
                    className="custom-textarea"
                    placeholder="Este é o texto que aparecerá no feed de atualizações para que os colaboradores possam saber sobre seu evento."
                    {...register("description", {
                      required: "Campo obrigatório",
                    })}
                  ></textarea>
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
                    id="localEvent"
                    options={options_local}
                    placeholder="Selecione"
                    className="custom-select-css-w9q2zk-Input2"
                    onChange={(selectedOption) =>
                      setValue("localEvent", selectedOption)
                    }
                  />
                </div>
                <div className="container-event-details">
                  <div className="container-create-event-child">
                    <Input
                      type="date"
                      label="Data de início"
                      id="initialDate"
                      placeholder="dd/mm/aaaa"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
                    />
                    <Input
                      type="date"
                      label="Data de término"
                      id="finishDate"
                      placeholder="dd/mm/aaaa"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
                    />
                  </div>
                  <div className="container-create-event-child">
                    <Input
                      type="time"
                      label="Horário de início"
                      id="initialTime"
                      placeholder="00:00"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
                    />
                    <Input
                      type="time"
                      label="Horário de término"
                      id="finishTime"
                      placeholder="00:00"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
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
                  <Input
                    type="date"
                    label="Data de início"
                    id="initialDateTicket"
                    placeholder="dd/mm/aaaa"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />
                  <Input
                    type="time"
                    label="Horário de início dos ingressos"
                    id="initialTimeTicket"
                    placeholder="00:00"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />
                </div>
                <div className="container-event-details">
                  <Input
                    type="date"
                    label="Data de término dos ingressos"
                    id="finishDateTicket"
                    placeholder="dd/mm/aaaa"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />

                  <Input
                    type="time"
                    label="Horário de término dos ingressos"
                    id="finishTimeTicket"
                    placeholder="00:00"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                  />
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button type="submit">Concluir criação do evento</button>
              <button type="button">Limpar</button>
            </div>
          </div>
        </form>

        <div className="container-menu-create">
          <div className="container-calendar">
            <Calendar
              onChange={(date) => setValue("date", date)}
              value={getValues("date")}
            />
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
