import React from "react";
import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  type Error = {
    statusText: string;
    message: string;
  };

  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="mb-20">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
