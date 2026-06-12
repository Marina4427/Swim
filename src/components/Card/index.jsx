import "./style.css";
import swim from "../../assets/svg/swimming.svg";
import { Link } from "react-router-dom";

const Card = ({ id, img, skills, title, desk, price }) => {
  return (
    <div className="card">
      <div className="img_container">
        <img src={img} alt="" className="card_img" />
      </div>

      <div className="card_text_block">
        <div className="card_icon-block">
          <img src={swim}></img>
          <p className="classes_type">{skills}</p>
        </div>

        <p className="card_title">{title}</p>

        <p className="card_disc">{desk}</p>
        <p className="card_price">{price}</p>
        <Link className="card_link" to={`/course/${id}`}>
          Подробнее...
        </Link>
      </div>
    </div>
  );
};

export default Card;
