import React from 'react'
import './Feed.css';

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const Feed = () => {
  return (
    <div className='container-feed'>
      <section className="banner">
        <text>
          <p>ETS - Engineering Technical School</p>
          <h1>Hackathon</h1>
          <h2>Venha conhecer a competição de tecnologia e inovação da ETS</h2>
          <button>Saber mais</button>
          <p>7ª Edição - Julho de 2024</p>
        </text>
        <div className="container-image-banner">
          <img src="src\assets\image-banner.png" alt="" className='circle'/>
          <img src="src\assets\image-banner.png" alt="" className='img'/>
        </div>
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
              <img src="src\assets\images-feed\img-1.png" alt="" />
              <div className="caption">
                <div className="likes">
                  <FaHeart />
                  <p>42</p>
                </div>
                <div className="views">
                  <MdOutlineRemoveRedEye />
                  <p>50</p>
                </div>
                <p>Momento da apresentação do projeto.</p>
              </div>
            </div>
            <div className="container-post">
              <img src="src\assets\images-feed\img-2.png" alt="" />
              <div className="caption">
                <div className="likes">
                  <FaHeart />
                  <p>42</p>
                </div>
                <div className="views">
                  <MdOutlineRemoveRedEye />
                  <p>50</p>
                </div>
                <p>Equipe reunida com o troféu em mãos.</p>
              </div>
            </div>
            <div className="container-post">
              <img src="src\assets\images-feed\img-3.png" alt="" />
              <div className="caption">
                <div className="likes">
                  <FaHeart />
                  <p>42</p>
                </div>
                <div className="views">
                  <MdOutlineRemoveRedEye />
                  <p>50</p>
                </div>
                <p>Equipe descobrindo que alcançou o 1°...</p>
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
    </div>
  )
}

export default Feed