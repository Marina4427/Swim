// import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";

import swimImg from "../../assets/img/swim.png";
import Btn from "../../components/Btn";
import CardList from "../../components/Card_list";
import TrainerCard from "../../components/Trainer";
import Footer from "../../components/footer";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";

const Main = () => {
  return (
    <>
      <section class="hero" id="main">
        <div className="hero_conteiner">
          <div className="main_nav">
            <Logo />
            <NavBar />
          </div>

          <div className="main__bl">
            <div className="img_cont">
              <img src={swimImg} alt="Swim" className="main_foto" />
            </div>

            <div className="main__content">
              <h1 className="main__title">
                <span className="school_name" data-text="Дельфин">
                  Дельфин
                </span>
                <span className="second-line">школа плавания в Эспоо</span>
              </h1>

              <p className="subtitle">Превращаем новичков в чемпионов</p>
              <p className="text">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, rem, tempora beatae et ea maiores dolorem ipsam, alias
                exercitationem animi aliquam ex reprehenderit officia harum quae
                quibusdam! Numquam, doloribus soluta? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Pariatur, rem, tempora beatae
                et ea maiores dolorem ipsam, alias exercitationem animi aliquam
        
              </p>
              <Btn />
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <section id="classes">
          <h2 className="second-line">Занятия</h2>
          <p className="classses-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            laborum similique neque et, maiores quos! Incidunt quam officia
            <br />
            <p className="offer">Первое занятие - бесплатно</p>
          </p>
          <CardList />
        </section>
        <section id="trainer">
          <h2 className="second-line"> О тренере </h2>
          <TrainerCard />
        </section>

        <section id="adress">
          <h2 className="second-line"> Где и как проходят занятия </h2>
          <div className="adress">
            <p className="rules">
              {" "}
              На данный момент занятия проходят в бассеине Леппяваара, Эспоо.
              Точный адрес Veräjäpellonkatu 15, 02650 Espoo.
              <br />
              В дальнейшем адреса бассейнов будут пополняться.
              <br />
              Прибыть необходимо за 10 мин до занятия. Тренер встечает учеников
              у главного входа.
              <br />
              Неоходимо оплатить вход в бассейн или иметь карту бассейна.
              <br />
              Занятие длится 45 минут.
              <br />
              Для новичков с собой неоходимо иметь только досочку для плавания,
              она необходима для постановки правильной техники.
              <br />
              Никакого дополнительного оборудываня для плавания не требуется.
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.2528846445293!2d24.8037131!3d60.22619219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df688743bc7bb%3A0x1e993de48fd2a4ce!2sLepp%C3%A4vaara%20indoor%20swimming%20pool%20and%20outdoor%20swimming%20pool!5e0!3m2!1sru!2sfi!4v1780927983145!5m2!1sru!2sfi"
              width="400"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="rules">
          <h2 className="second-line"> Как записаться на занятия </h2>
          <p className="rules">
            Для записи на занятия нужно перейти по ссылки в телеграмм и с Вами
            свяжется тренер напрямую, уточнит Ваш уровень и предложит различные
            варианты занятий и ответит на все вопросы.
            <br />
            Укажите возраст, удобное время для занятий, количество занятий в
            неделю, уровень плавани.
            <br />
            Перейти в телеграмм канал можно по кнопке "Записаться на занятие"
            или при нажатии
            <Icon />
            <br />
            Писать можно на украинском, русском, английском и финском языках.
            <br />
            Ждем Вас на первом бесплатном занятии!
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Main;
