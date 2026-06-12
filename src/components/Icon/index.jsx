import tg from "../../assets/svg/tg.svg";
import './style.css';

const Icon = () => {
  return (
    <a
  href="https://t.me/dolphin_school"
  target="_blank"
  rel="noopener noreferrer"
>
  <img className="icon_size" src={tg} alt="Telegram" />
</a>
  )
}

export default Icon;
