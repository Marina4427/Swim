import "./style.css";
import Btn from "../Btn";
import wave from "../../assets/svg/wave.svg";
import { useState } from "react";

const NavBar = () => {
  3;
  const [isOpen, setIsOpen] = useState(false);
  3;

  return (
    <nav className="nav">
      <div className="nav__content">
        <button
          className="burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <img src={wave} alt="menu" className="burger_icon"/>
        </button>
        <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
          <li className="nav__item">
            <a
              className="nav__item-link"
              href="#classes"
              onClick={() => setIsOpen(false)}
            >
              Занятия
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              href="#trainer"
              onClick={() => setIsOpen(false)}
            >
              О тренере
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              href="#adress"
              onClick={() => setIsOpen(false)}
            >
              Бассейн
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              href="#rules"
              onClick={() => setIsOpen(false)}
            >
              Вопросы
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              href="#rules"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </a>
          </li>
        </ul>
        <Btn />
      </div>
    </nav>
  );
};

export default NavBar;
