import React from "react";
import foto from "../../assets/img/trainer.avif";
import "./style.css";

const TrainerCard = () => {
  return (
    <div className="container">
      <div className="foto-container">
        <img src={foto} alt="Trainer foto" className="trainer_foto"></img>
      </div>

      <div className="trainer_text-block">
        <p className="trainer_name"> АНДРИЙ</p>
        <p className="trainer_status"> Мастер спорта</p>
        <p className="trainer_desc">
          {" "}
          20 лет играл в сборной по водному поло. Призер международных командных
          соревнований. Тренерский страж 10 лет. И много много чего интересного
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          voluptate distinctio maxime quia modi repudiandae voluptatum, iure
          eligendi repellat tenetur illo ab laboriosam dolorum tempore deserunt
          debitis quas molestias dicta!
        </p>
      </div>
    </div>
  );
};

export default TrainerCard;
