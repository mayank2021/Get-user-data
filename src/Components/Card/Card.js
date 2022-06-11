import React from "react";
import "./Card.css";

const Card = ({ img, firstName, lastName, email, empty }) => {
  return (
    <div className="card-main--container">
      {empty ? (
        <p className="no-user--text">
          No user selected😢. Please selected a user by clicking on the button
          given below.
        </p>
      ) : (
        <>
          <img className="card-img" src={img} alt="profile" />
          <div className="card-text--container">
            <p>
              Name: {firstName} {lastName}
            </p>
            <p>Email: {email}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
