/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Sidebar, Navbar, PreloaderImage } from "../../components/index";
import EvaluationModal from "../../components/EvaluationModal/EvaluationModal";
import { Loading } from "../../pages/index";
import "./Home.css";
import "material-symbols";
import { useEventById, useAssessmentWithEvent } from "../../services/queries";

import { FaStar } from "react-icons/fa";

const Home = () => {
  const eventId = "1";
  const { data: eventFeed, isLoading } = useEventById(eventId);
  const { data: assessmentData } = useAssessmentWithEvent(eventId);

  const [eventFeedData, setEventFeedData] = useState(null);
  const [assessments, setAssessments] = useState([{}, {}, {}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventFeed) {
      setEventFeedData(eventFeed);
    }
  }, [eventFeed]);

  useEffect(() => {
    if (assessmentData?.assessments) {
      // Se houver pelo menos três avaliações, atualize os dados
      setAssessments([
        assessmentData.assessments[0] || {},
        assessmentData.assessments[1] || {},
        assessmentData.assessments[2] || {},
      ]);
    }
  }, [assessmentData]);

  // Timeout to hide loading screen after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // modal for images post
  const [modalOpenImage, setModalOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [caption, setCaption] = useState("");

  const openModalImage = (imageSrc, captionText) => {
    setSelectedImage(imageSrc);
    setCaption(captionText);
    setModalOpenImage(true);
  };

  const closeModalImage = () => {
    setSelectedImage("");
    setCaption("");
    setModalOpenImage(false);
  };

  const { nameOfEvent, responsible_area, local, description, imgUrl } = eventFeedData || {};

  const displayResponsibleArea = responsible_area === "ETS" ? "ETS - Engineering Technical School" : responsible_area;

  const renderStars = (assessment) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} color={i < assessment ? "#ffc107" : "#e4e5e9"} />);
    }
    return stars;
  };

  if (setLoading || isLoading) {
    return <div className="loading-img"><PreloaderImage src={Loading} alt="Loading..." /></div>
  }

  return (
    <div className={`feed-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="home"
        activePage="feed"
        navigationText="Home"
        showNavigationTexts={true}
        tabs={[
          { name: "feed", text: "Feed de eventos", link: "/feed" },
          { name: "description", text: "Descrição", link: "/description" },
        ]}
      />

      <Sidebar
        activePage="home"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-feed">
        <style>
          {`
          :root {
            --dynamic-image: url('${imgUrl}');
          }
        `}
        </style>

        <section className="banner">
          <div className="text">
            <p>{displayResponsibleArea}</p>
            <h1>{nameOfEvent}</h1>
            <h2>Venha conhecer a competição de tecnologia e inovação da ETS</h2>
            <button onClick={openModal}>Saber mais</button>
            <p>{local}</p>
          </div>
          <div className="container-image-banner">
            {/* <div className="shadow"></div> */}
            <div className="overlay-image"></div>
            <div className="blur-green"></div>
            <img src={imgUrl} alt="" />
          </div>
          <div className="blur-blue"></div>
          <div className="elipse-linear-1"></div>
          <div className="elipse-linear-2"></div>
          <div className="elipse-linear-3"></div>
        </section>

        <div className="content">
          <section className="introduction">
            {description}
            <h1>
              O que é o{" "}
              <span className="mark-blue">
                <b>{nameOfEvent}</b>?
              </span>
            </h1>
          </section>
          <section className="last-edition">
            <h1>Edição anterior do {nameOfEvent}</h1>
            <p>
              Confira alguns dos momentos emocionantes e experiências
              compartilhadas pela equipe vencedora da edição anterior, Happdine,
              oferecendo um vislumbre do talento e da criatividade que permeiam
              esse evento inspirador.
            </p>
            <div className="images">
              <div className="container-post">
                <img
                  src="src\assets\images-feed\img-1.png"
                  alt=""
                  onClick={() =>
                    openModalImage(
                      "src/assets/images-feed/img-1.png",
                      "Momento da apresentação do projeto."
                    )
                  }
                />
                <div className="caption">
                  <p className="caption-text">Momento da apresentação do projeto.</p>
                </div>
              </div>
              <div className="container-post">
                <img
                  src="src\assets\images-feed\img-2.png"
                  alt=""
                  onClick={() =>
                    openModalImage(
                      "src/assets/images-feed/img-2.png",
                      "Equipe reunida com o troféu em mãos.",
                    )
                  }
                />
                <div className="caption">
                  <p className="caption-text">Equipe reunida com o troféu em mãos.</p>
                </div>
              </div>
              <div className="container-post">
                <img
                  src="src\assets\images-feed\img-3.png"
                  alt=""
                  onClick={() =>
                    openModalImage(
                      "src/assets/images-feed/img-3.png",
                      "Equipe descobrindo que alcançou o 1° lugar.",
                    )
                  }
                />
                <div className="caption">
                  <p className="caption-text">Equipe descobrindo que alcançou o...</p>
                </div>
              </div>
            </div>
          </section>
          <section className="comment">
            <h1>Comentários</h1>
            <div className="row">
              <section>
                <div className="profile">
                  <div className="circle">
                    <p>{assessments[0]?.author?.[0] || "A"}</p>
                  </div>
                  <div className="comment-header">
                    <div className="row">
                      <p className="name">{assessments[0]?.author || "Autor"}</p>
                      <p className="time">{assessments[0]?.date_created || "Data"}</p>
                    </div>
                    <div className="stars">
                      {renderStars(assessments[0]?.assessment || 0)}
                    </div>
                  </div>
                </div>
                <p>
                  {assessments[0]?.description_comment || "Comentário"}
                </p>
              </section>
              <section>
                <div className="profile">
                  <div className="circle">
                    <p>{assessments[1]?.author?.[0] || "B"}</p>
                  </div>
                  <div className="comment-header">
                    <div className="row">
                      <p className="name">{assessments[1]?.author || "Autor"}</p>
                      <p className="time">{assessments[1]?.date_created || "Data"}</p>
                    </div>
                    <div className="stars">
                      {renderStars(assessments[1]?.assessment || 0)}
                    </div>
                  </div>
                </div>
                <p>
                  {assessments[1]?.description_comment || "Comentário"}
                </p>
              </section>
            </div>
            <section>
              <div className="profile">
                <div className="circle">
                  <p>{assessments[2]?.author?.[0] || "C"}</p>
                </div>
                <div className="comment-header">
                  <div className="row">
                    <p className="name">{assessments[2]?.author || "Autor"}</p>
                    <p className="time">{assessments[2]?.date_created || "Data"}</p>
                  </div>
                  <div className="stars">
                    {renderStars(assessments[2]?.assessment || 0)}
                  </div>
                </div>
              </div>
              <p>
                {assessments[2]?.description_comment || "Comentário"}
              </p>
            </section>
          </section>
        </div>

        <footer>
          <div className="logotype-footer">
            <p>bosch</p>
            <p>esy</p>
          </div>
          <section>
            <p>© Robert Bosch Ltda. 2024, todos os direitos reservados</p>
            <p>Termos de uso</p>
            <p>Aviso legal</p>
            <p>Declarações e definições de privacidade</p>
          </section>
        </footer>

        {modalOpen && <EvaluationModal onClose={closeModal} eventId={eventId} />}

        {modalOpenImage && (
          <div className="modal-image">
            <div
              className={`modal-content-image ${modalOpenImage ? "" : "closed"
                }`}
            >
              <span className="close-button-image" onClick={closeModalImage}>
                &times;
              </span>
              <img src={selectedImage} alt="" />
              <div className="caption">
                <div className="caption-sub-container">
                  <p>{caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
