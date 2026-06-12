import "./style.css";
import tg from "../../assets/svg/tg.svg";

const Btn = () => {
  return (
    <a
      href="https://t.me/delfinespoo"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      {" "}
      Записаться на занятие
      <img className="icon_size" src={tg} alt="Telegram"></img>
    </a>
  );
};

export default Btn;
