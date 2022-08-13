import { useNavigate } from "react-router-dom";

import "./page-not-found.styles.scss";

const PageNotFound = () => {
  const navigation = useNavigate();
  return (
    <div className="error-page">
      <div className="error-page-container">
        <h1>404 Error Page</h1>
        {/* <p class="zoom-area">
          <b>CSS</b> animations to make a cool 404 page.{" "}
        </p> */}
        <section class="error-container">
          <span>4</span>
          <span>
            <span class="screen-reader-text">0</span>
          </span>
          <span>4</span>
        </section>
      </div>
    </div>
  );
};
export default PageNotFound;
