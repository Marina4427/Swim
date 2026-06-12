import Card from "../Card";
import { classes } from "../../helper/classes_list";
import './style.css';

const CardList = () => {
  return (
    <div className="cards_container">
      {classes.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.img}
          skills={item.skills}
          title={item.title}
          desk={item.desk}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardList;