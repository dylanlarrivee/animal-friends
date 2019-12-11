import React from "react";
import Card from "./Card";

const CardList = ({ animals }) => {
    return (
      <div>
          {
              animals.map((user, i) => {
                  return (
                    <Card
                    key={i}
                    id={animals[i].id}
                    name={animals[i].name}
                    sound={animals[i].sound}
                    image={animals[i].image}
                  />
                  );
              })
            }
      </div>
    );
  }

export default CardList;
