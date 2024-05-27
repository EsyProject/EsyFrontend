/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Sidebar, Navbar } from "../../components/index";
import EvaluationModal from "../../components/EvaluationModal/EvaluationModal";
import "./Home.css";
import "material-symbols";
import { useEventById } from "../../services/queries";

import { FaStar } from "react-icons/fa";

const Home = () => {
  const eventId = "3"; 
  const { data: eventFeed } = useEventById(eventId);

  const [eventFeedData, setEventFeedData] = useState(null);

  useEffect(() => {
    if (eventFeed) {
      setEventFeedData(eventFeed);
    }
  }, [eventFeed]);

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
            <p>{responsible_area}</p>
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
                    <p>LS</p>
                  </div>
                  <div className="comment-header">
                    <div className="row">
                      <p className="name">Luiza Santos</p>
                      <p className="time">3 meses atrás</p>
                    </div>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  "Participar do hackathon foi incrível! Nós, como estudantes de
                  ciência da computação, desenvolvemos uma solução para melhorar
                  a acessibilidade em aplicativos de transporte. Vencer foi uma
                  surpresa e validou nosso trabalho árduo. A experiência
                  reforçou minha paixão pela tecnologia e me deu confiança para
                  enfrentar novos desafios."
                </p>
              </section>
              <section>
                <div className="profile">
                  <div className="circle">
                    <p>AS</p>
                  </div>
                  <div className="comment-header">
                    <div className="row">
                      <p className="name">Ana Silva</p>
                      <p className="time">4 meses atrás</p>
                    </div>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  "Participar do hackathon foi enriquecedor. Como iniciante em
                  desenvolvimento de aplicativos móveis, me juntei a um time
                  para criar uma solução para saúde mental no ambiente de
                  trabalho. Vencer foi uma validação do nosso trabalho árduo e
                  me deu confiança para continuar aprendendo e crescendo."
                </p>
              </section>
            </div>
            <section>
              <div className="profile">
                <div className="circle">
                  <p>PS</p>
                </div>
                <div className="comment-header">
                  <div className="row">
                    <p className="name">Pedro Somavillar</p>
                    <p className="time">3 meses atrás</p>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p>
                "Participar do hackathon foi uma experiência transformadora para
                mim. Como um aprendiz autodidata na área de desenvolvimento web,
                eu estava um pouco apreensivo em competir ao lado de estudantes
                mais experientes. No entanto, eu me desafiei a sair da minha
                zona de conforto e me juntei a um time diversificado de
                talentos. Juntos, enfrentamos o desafio de criar uma solução
                para promover a sustentabilidade no setor de tecnologia. Foi
                incrível ver como nossas habilidades complementares se uniram
                para criar uma solução inovadora e impactante. Vencer o
                hackathon foi uma verdadeira celebração do poder da colaboração
                e da criatividade, e me deu a confiança para continuar
                perseguindo meus objetivos na área de tecnologia."
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
