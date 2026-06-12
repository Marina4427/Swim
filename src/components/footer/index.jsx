import Icon from "../Icon";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links-block">
        <div className="footer_column">
          <h3>О школе</h3>
          <p className="about_desc">
            {" "}
            Школа плавания Дельфин - обучение планию для всех, групповые и
            индивидуальные занятия
          </p>
        </div>

        <div className="footer_column">
          <h3>Ссылки</h3>
          <ul>
            <li>
              {" "}
              <a href="#main">Главная</a>
            </li>
            <li>
              {" "}
              <a href="#classes">Занятия</a>{" "}
            </li>
            <li>
              <a href="#trainer">Отренере</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#rules">Вопросы</a>{" "}
            </li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Адрес</h3>
          <p>
            {" "}
            <a href="#adress">Veräjäpellonkatu 15, 02650 Espoo</a>
          </p>
        </div>

        <div className="footer_column">
          <h3>Записаться на занятие</h3>
          <p>
            <a
              href="https://t.me/delfinespoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              1-е занятие бесплатно
              <Icon />
            </a>
          </p>
        </div>
      </div>

      <p className="designed"> © 2026 Dolphin - swimming school</p>
    </footer>
  );
};

export default Footer;
