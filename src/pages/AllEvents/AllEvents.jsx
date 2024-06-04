import { useState } from "react";
import { useCreateEvent, useCreateTicket } from "../../services/mutations";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Sidebar,
  Navbar,
  // CardView,
  Input,
  CustomSelect,
} from "../../components/index";
import "material-symbols";
import "./AllEvents.css";

import CardView from "../../components/CardView/CardView";

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

const AllEvents = () => {
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

  const isFutureDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    // Remove time part to only compare the dates
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate >= today;
  };

  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy');
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
      // Verifique se as datas do evento são futuras
      if (!isFutureDate(data.initialDate) || !isFutureDate(data.finishDate)) {
        toast.error("O evento só pode ser criado ao contar desta data");
        return;
      }

      // Verifique se as datas dos ingressos são futuras
      if (!isFutureDate(data.initialDateTicket) || !isFutureDate(data.finishDateTicket)) {
        toast.error("Os ingressos só podem ser criados ao contar desta data");
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
        activePage="apps"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="all-events-container-main">
        <p className="all-events-title">Todos os eventos</p>
        <div className="all-events-content">
          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="ETS - DS"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="BD - DEV"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="AMB - GE"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="HR - GE"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="ETS - DS"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="HR - GE"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="BD - UX/UI"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />

          <CardView
            nameOfEvent="Jornada do Conhecimento"
            initialDate="22/02/2024"
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent="Ca300"
            responsible_area="AMB - DS"

            description="Lorem ipsum dolor sit amet. Et asperiores numquam sit totam 
            quod sit galisum deserunt ut consequatur modi aut molestias incidunt in 
            pariatur dolore in quae eveniet? Et dolore asperiores aut nostrum 
            necessitatibus ex error modi ut veniam dolore 33 omnis error sed 
            molestias velit qui blanditiis odio. Ut galisum animi et assumenda 
            assumenda aut itaque maxime ut soluta incidunt non labore totam qui 
            doloribus soluta ut suscipit galisum. Et aliquam rerum eum accusantium 
            dignissimos et quia minima. Est recusandae placeat At officiis ipsa ut 
            exercitationem ratione ea exercitationem eaque eos natus enim.

            Est incidunt dignissimos ut veritatis blanditiis sit nesciunt earum et 
            nihil commodi id repellendus molestias. Et voluptatibus laborum ex labore 
            cupiditate et minus voluptas. Aut labore recusandae et commodi blanditiis 
            et dolorum sint sed voluptatem quasi. Et sequi libero aut quibusdam autem 
            ut facilis voluptate vel quas autem rem Quis sunt et beatae officia. 
            Ut sequi eligendi qui voluptas molestias id voluptatibus dolore ea 
            magnam aliquam."

            img="src/assets/dog.jpg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default AllEvents;