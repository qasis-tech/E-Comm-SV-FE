import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/nodata.png";
import "../styles/no-data-available.styles.scss";

const NoDataAvailable = () => {
  const navigate = useNavigate();
  return (
    <div className="no-data-found">
      <div class="empty-state">
        <div class="empty-state__content">
          <div class="empty-state__icon">
            <img src={BackgroundImage} alt="background image" />
          </div>
          <div class="empty-state__message">No records has been added yet.</div>
        </div>
      </div>
    </div>
  );
};
export default NoDataAvailable;
