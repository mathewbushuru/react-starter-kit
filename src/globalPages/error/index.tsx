import { FC } from "react";
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

import { Button } from "@/components/UI";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        Error
        <p>{error.statusText || error.status}</p>
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <Button onClick={() => navigate("/")}>Go home</Button>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <pre>{error.message}</pre>
      </div>
    );
  } else {
    return <></>;
  }
};
