import { useState } from "react";
import { useCreateEvent, useCreateTicket } from "../../services/mutations";
import { useAllEvents } from '../../services/queries';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { format, addDays } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    reset,
    clearErrors,
  } = useForm();
  const createEventMutation = useCreateEvent();
  const createTicketMutation = useCreateTicket();
  const [eventBanner, setEventBanner] = useState(null);
  const { data: events, isLoading, isError } = useAllEvents();

  const isFutureDate = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const inputDate = new Date(date);
    // Remove time part to only compare the dates
    yesterday.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate >= yesterday;
  };

  const formatDate = (date) => {
    const adjustedDate = addDays(new Date(date), 1);

    return format(adjustedDate, 'dd/MM/yyyy');
  };

  const formatTime = (time) => {
    return format(new Date(`1970-01-01T${time}:00`), 'HH:mm:ss');
  };

  const handleReset = () => {
    reset();
    setEventBanner(null);
  };

  const handleFileChange = (e) => {
    setEventBanner(e.target.files[0]);
  };

  const handleCreateEvent = async (data) => {
    try {
      // Checks if event data is future
      if (!isFutureDate(data.initialDate) || !isFutureDate(data.finishDate)) {
        toast.error("Você não pode criar um evento com uma data no passado");
        return;
      }

      // Checks if ticket data is future
      if (!isFutureDate(data.initialDateTicket) || !isFutureDate(data.finishDateTicket)) {
        toast.error("Você não pode criar ingressos com uma data no passado");
        return;
      }

      const formData = new FormData();

      formData.append("nameOfEvent", data.nameOfEvent);
      formData.append("finishDate", data.finishDate);
      formData.append("finishTime", data.finishTime);
      formData.append("initialDate", data.initialDate);
      formData.append("initialTime", data.initialTime);
      formData.append("localEvent", data.localEvent);
      formData.append("responsible_area", data.responsible_area);
      formData.append("description", data.description);

      if (data.imgUrl && data.imgUrl.length > 0) {
        for (let i = 0; i < data.imgUrl.length; i++) {
          formData.append("images", data.imgUrl[i]);
        }
      }

      if (eventBanner) {
        formData.append("imgUrl", eventBanner);
      }

      // Formatação das datas e horários dos ingressos
      const initialDateTicketFormatted = formatDate(data.initialDateTicket);
      const finishDateTicketFormatted = formatDate(data.finishDateTicket);
      const initialTimeTicketFormatted = formatTime(data.initialTimeTicket);
      const finishTimeTicketFormatted = formatTime(data.finishTimeTicket);

      formData.append("initialDateTicket", initialDateTicketFormatted);
      formData.append("initialTimeTicket", initialTimeTicketFormatted);
      formData.append("finishDateTicket", finishDateTicketFormatted);
      formData.append("finishTimeTicket", finishTimeTicketFormatted);

      const eventPromise = createEventMutation.mutateAsync(formData);
      toast.promise(
        eventPromise,
        {
          pending: 'Criando o evento...',
          success: 'Evento criado com sucesso!',
          error: 'Erro ao criar evento!'
        }
      );

      const eventData = await eventPromise;

      if (eventData && eventData.event_id) {
        const ticketData = {
          initialDateTicket: initialDateTicketFormatted,
          initialTimeTicket: initialTimeTicketFormatted,
          finishDateTicket: finishDateTicketFormatted,
          finishTimeTicket: finishTimeTicketFormatted,
        };

        const ticketPromise = createTicketMutation.mutateAsync({
          eventId: eventData.event_id,
          ...ticketData,
        });

        toast.promise(
          ticketPromise,
          {
            pending: 'Criando ticket...',
            success: 'Ticket criado com sucesso!',
            error: 'Erro ao criar ticket!'
          }
        );

        await ticketPromise;
      } else {
        console.error("Event data does not have an event_id:", eventData);
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
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
            name: "update",
            text: "Atualização de evento",
            link: "/update",
          },
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
        <ToastContainer />
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
                    errors={errors}
                    clearErrors={clearErrors}
                  />

                  <CustomSelect
                    label="Área responsável"
                    id="responsible_area"
                    options={options_area}
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
                  />

                  <Input
                    label="Imagem para o banner"
                    type="file"
                    id="imgUrl"
                    accept="image/*"
                    onChange={handleFileChange}
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                </div>
                <div className="container-create-event-child">
                  <h4 className="label-textarea">Descrição</h4>
                  <textarea
                    className={`custom-textarea ${errors.description ? "textarea-error" : ""}`}
                    placeholder="Este é o texto que aparecerá no feed de atualizações para que os colaboradores possam saber sobre seu evento."
                    {...register("description", {
                      required: "Campo obrigatório",
                    })}
                    onChange={(e) => {
                      setValue("description", e.target.value);
                      clearErrors("description");
                    }}
                  ></textarea>

                  {errors.description && (
                    <p className="error-message">
                      {errors.description.message}
                    </p>
                  )}
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
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
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
                      errors={errors}
                      clearErrors={clearErrors}
                    />

                    <Input
                      type="date"
                      label="Data de término"
                      id="finishDate"
                      placeholder="dd/mm/aaaa"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
                      errors={errors}
                      clearErrors={clearErrors}
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
                      errors={errors}
                      clearErrors={clearErrors}
                    />

                    <Input
                      type="time"
                      label="Horário de término"
                      id="finishTime"
                      placeholder="00:00"
                      className="input-style"
                      register={register}
                      validationRules={{ required: "Campo obrigatório" }}
                      errors={errors}
                      clearErrors={clearErrors}
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
                    errors={errors}
                    clearErrors={clearErrors}
                  />

                  <Input
                    type="time"
                    label="Horário de início"
                    id="initialTimeTicket"
                    placeholder="00:00"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                </div>
                <div className="container-event-details">
                  <Input
                    type="date"
                    label="Data de término"
                    id="finishDateTicket"
                    placeholder="dd/mm/aaaa"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
                    clearErrors={clearErrors}
                  />

                  <Input
                    type="time"
                    label="Horário de término"
                    id="finishTimeTicket"
                    placeholder="00:00"
                    className="input-style"
                    register={register}
                    validationRules={{ required: "Campo obrigatório" }}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button type="button" onClick={handleReset}>
                Limpar
              </button>
              <button type="submit">Concluir criação do evento</button>
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
          <div className="events-list">
          <h3>Eventos Cadastrados</h3>
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Erro ao carregar eventos</p>
          ) : events && events.length > 0 ? (
            events.map((event) => (
              <TagCard
                key={event.event_id}
                date={event.initialDate}
                title={event.nameOfEvent}
                description={event.description}
                area={event.responsible_area}
              />
            ))
          ) : (
            <p>Nenhum evento cadastrado</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;