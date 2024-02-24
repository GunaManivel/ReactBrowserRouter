import React from "react";
import "./Style/Card.css"; // Importing the CSS file from the Style folder

function Card({ title, description, imageUrl, date, month }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text text-muted">
          {date}&nbsp;
          {month}
        </p>
      </div>
    </div>
  );
}

export default Card;
