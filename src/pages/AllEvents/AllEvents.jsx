import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {
  Sidebar,
  Navbar
} from "../../components/index";
import "material-symbols";
import { useEventById } from "../../services/queries";
import "./AllEvents.css";

import CardView from "../../components/CardView/CardView";

const AllEvents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const eventId = "18";
  const { data: eventFeed } = useEventById(eventId);
  const [eventFeedData, setEventFeedData] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (eventFeed) {
      setEventFeedData(eventFeed);
    }
  }, [eventFeed]);

  const { nameOfEvent, initialDate, responsible_area, localEvent, description, imgUrl } = eventFeedData || {};

  console.log("Name of Event:", nameOfEvent);
  console.log("Initial Date:", initialDate);
  console.log("Responsible Area:", responsible_area);
  console.log("Local:", localEvent);
  console.log("Description:", description);
  console.log("Image URL:", imgUrl);

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
        <div className="all-events-content">
          <CardView
            nameOfEvent={nameOfEvent}
            initialDate={initialDate}
            finishDate="26/02/2024"
            initialTime="10:00"
            finishTime="14:00"
            localEvent={localEvent}
            responsible_area={responsible_area}

            description="{description}"

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