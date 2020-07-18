import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
