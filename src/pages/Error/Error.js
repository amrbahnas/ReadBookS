import { useRouteError, useNavigate } from "react-router-dom";
import styles from "./Error.module.css"
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // back on click
  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.error}>
      <div>
        <div xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <div>
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
              <button  onClick={goBack}>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
