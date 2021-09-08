import React from "react";
import "./GoogleLogin.css";

export const UserCard = (props) => {
  return (
    <div>
      <h2>{props.user.name.split(" ")[0]}</h2>
      <img src={props.user.profileImg} alt="user profile" className="avatar" />
    </div>
  );
};
