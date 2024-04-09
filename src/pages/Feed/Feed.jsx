import React, { useState } from 'react'
import Modal from 'react-modal';
import './Feed.css';
import 'material-symbols';

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Feed = () => {
  const dynamicImage = 'src/assets/image-banner.png';
  // const dynamicImage = 'src/assets/dog.jpg';

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // flags of modal
  function toggleActive(button) {
    button.classList.toggle("active");
  }

  const buttons = document.querySelectorAll('.flag');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      toggleActive(button);
    });
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // checkbox modal
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // starts color select
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  // modal for images post

  const [modalOpenImage, setModalOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [caption, setCaption] = useState('');
  const [likes, setLikes] = useState('');
  const [views, setViews] = useState('');

  const openModalImage = (imageSrc, captionText, likes, views) => {
    setSelectedImage(imageSrc);
    setCaption(captionText);
    setLikes(likes);
    setViews(views);
    setModalOpenImage(true);
  };

  const closeModalImage = () => {
    setSelectedImage('');
    setCaption('');
    setLikes('');
    setViews('');
    setModalOpenImage(false);
  };

  return (
    <div className='container-feed'>
      <style>
        {`
          :root {
            --dynamic-image: url('${dynamicImage}');
          }
        `}
      </style>

      <section className="banner">
        <div className="text">
          <p>ETS - Engineering Technical School</p>
          <h1>Hackathon</h1>
          <h2>Venha conhecer a competição de tecnologia e inovação da ETS</h2>
          <button onClick={openModal}>Saber mais</button>
          <p>7ª Edição - Julho de 2024</p>
        </div>
        <div className="container-image-banner">
          {/* <div className="shadow"></div> */}
          <div className="overlay"></div>
          <div className="blur-green"></div>
          <img src={dynamicImage} alt="" />
        </div>
        <div className="blur-blue"></div>
        <div className="elipse-linear-1"></div>
        <div className="elipse-linear-2"></div>
        <div className="elipse-linear-3"></div>
      </section>

      <div className="content">
        <section className="introduction">
          <p>Hackathon é um evento semestral de destaque em nosso calendário, especialmente voltado para <b>as
            áreas de tecnologia e inovação</b>, reunindo aprendizes dos cursos de <b>Digital Solutions e Mecatrônica.</b> Esse
            evento não apenas promove o aprendizado prático e o desenvolvimento de habilidades essenciais,
            mas também fomenta um <span className='mark-green'>espírito de colaboração e inovação</span> entre nossos aprendizes.</p>
          <h1>O que é o <span className='mark-blue'><b>Hackathon</b>?</span></h1>
        </section>
        <section className="last-edition">
          <h1>Edição anterior do Hackathon</h1>
          <p>Confira alguns dos momentos emocionantes e experiências compartilhadas pela equipe vencedora da
            edição anterior, Happdine, oferecendo um vislumbre do talento e da criatividade que permeiam esse
            evento inspirador.</p>
          <div className="images">
            <div className="container-post">
              <img src="src\assets\images-feed\img-1.png" alt="" onClick={() => openModalImage("src/assets/images-feed/img-1.png", "Momento da apresentação do projeto.", "42", "50")} />
              <div className="caption">
                <div className="likes">
                  <span className='material-symbols-rounded'>favorite</span>
                  <p>42</p>
                </div>
                <div className="views">
                  <span className='material-symbols-rounded'>visibility</span>
                  <p>50</p>
                </div>
                <p>Momento da apresentação do projeto.</p>
              </div>
            </div>
            <div className="container-post">
              <img src="src\assets\images-feed\img-2.png" alt="" onClick={() => openModalImage("src/assets/images-feed/img-2.png", "Equipe reunida com o troféu em mãos.", "42", "50")} />
              <div className="caption">
                <div className="likes">
                  <span className='material-symbols-rounded'>favorite</span>
                  <p>42</p>
                </div>
                <div className="views">
                  <span className='material-symbols-rounded'>visibility</span>
                  <p>50</p>
                </div>
                <p>Equipe reunida com o troféu em mãos.</p>
              </div>
            </div>
            <div className="container-post">
              <img src="src\assets\images-feed\img-3.png" alt="" onClick={() => openModalImage("src/assets/images-feed/img-3.png", "Equipe descobrindo que alcançou o 1° lugar.", "42", "50")} />
              <div className="caption">
                <div className="likes">
                  <span className='material-symbols-rounded'>favorite</span>
                  <p>42</p>
                </div>
                <div className="views">
                  <span className='material-symbols-rounded'>visibility</span>
                  <p>50</p>
                </div>
                <p>Equipe descobrindo que alcançou o...</p>
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
              <p>"Participar do hackathon foi incrível! Nós, como estudantes de ciência da computação, desenvolvemos
                uma solução para melhorar a acessibilidade em aplicativos de transporte. Vencer foi uma surpresa e
                validou nosso trabalho árduo. A experiência reforçou minha paixão pela tecnologia e me deu confiança
                para enfrentar novos desafios."</p>
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
              <p>"Participar do hackathon foi enriquecedor. Como iniciante em desenvolvimento de aplicativos móveis,
                me juntei a um time para criar uma solução para saúde mental no ambiente de trabalho. Vencer foi uma
                validação do nosso trabalho árduo e me deu confiança para continuar aprendendo e crescendo."</p>
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
            <p>"Participar do hackathon foi uma experiência transformadora para mim. Como um aprendiz autodidata na
              área de desenvolvimento web, eu estava um pouco apreensivo em competir ao lado de estudantes mais
              experientes. No entanto, eu me desafiei a sair da minha zona de conforto e me juntei a um time
              diversificado de talentos. Juntos, enfrentamos o desafio de criar uma solução para promover a
              sustentabilidade no setor de tecnologia. Foi incrível ver como nossas habilidades complementares
              se uniram para criar uma solução inovadora e impactante. Vencer o hackathon foi uma verdadeira
              celebração do poder da colaboração e da criatividade, e me deu a confiança para continuar perseguindo
              meus objetivos na área de tecnologia."</p>
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

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h1>Avaliação do evento</h1>

            <div className="row">
              <div className="modal-sub-container">
                <h3>Nota</h3>
                <p>Dê uma nota para o último evento que você participou</p>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      onClick={() => handleStarClick(index)}
                      color={index < rating ? '#FFCD4D' : '#DFDFE0'} // Pinta as estrelas até a classificação atual
                      size={30}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>

                <h3>Pontos de destaque</h3>
                <p>O que você mais gostou no evento?</p>
                <div className="flags">
                  <div className="flag-container">
                    {['Temáticas abordadas', 'Interações sociais'].map((option, index) => (
                      <button
                        key={option}
                        className={`flag-option ${selectedOptions.includes(option) ? 'active' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="flag-container">
                    {['Alimentação', 'Pontualidade', 'Outro'].map((option, index) => (
                      <button
                        key={option}
                        className={`flag-option ${selectedOptions.includes(option) ? 'active' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <h3>Sugestões</h3>
                <p>Gostaria de dar alguma sugestão de melhoria (anônimo)?</p>
                <textarea className="custom-textarea" placeholder="Digite aqui"></textarea>
              </div>

              <div className="modal-sub-container">
                <h3>Comentários</h3>
                <p>Gostaria de compartilhar algum comentário sobre o evento ou a plataforma
                  com os demais membros do Esy?</p>
                <textarea className="custom-textarea" placeholder="Digite aqui"></textarea>

                <div className="check-container">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className='modal-permission'>Autorizo a publicação do comentário e avaliação no feed principal.</label>
                </div>

                <div className="btn-modal-container">
                  <button className="btn-submit">Enviar avaliação</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpenImage && (
        <div className="modal-image">
          <div className={`modal-content-image ${modalOpenImage ? '' : 'closed'}`}>
            <span className="close-button-image" onClick={closeModalImage}>&times;</span>
            <img src={selectedImage} alt="" />
            <div className="caption">
              <div className="caption-sub-container">
                <div className="likes">
                  <span className='material-symbols-rounded'>favorite</span>
                  <p>{likes}</p>
                </div>
                <div className="views">
                  <span className='material-symbols-rounded'>visibility</span>
                  <p>{views}</p>
                </div>
                <p>{caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed