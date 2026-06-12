import "./style.css";
import logo from "../../assets/svg/dolphin.svg";

const Logo = () => {
  return (
   <div className="nav__title-block">
              <img src={logo} alt="" className="logo"></img>
              <h2 className="nav__title" data-text="Дельфин">
                Дельфин
              </h2>
              <h3 className="nav__subtitle"> Школа плавания в Эспоо </h3>
            </div>
  )
}

export default Logo;
