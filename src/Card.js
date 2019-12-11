import React from "react";

const Card = ({ name, sound, image, id}) => {
    return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="animal"
        height="200"
        width="200"
        src={image}
      />
      <div>
        <h2>{name}</h2>
        <p>{sound}</p>
      </div>
    </div>
  );
};

export default Card;
