import React from "react";

const Photo = (props) => {
  const { image, text } = props;
  const imgStyles = {
    maxHeight: "200px",
  };
  return (
    <div className="border-secondary border-bottom text-center bg-light">
      <div>
        <img style={imgStyles} src={image.url} alt={image.alt} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default Photo;
