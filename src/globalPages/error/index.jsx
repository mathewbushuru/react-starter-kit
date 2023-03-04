import { useNavigate, useRouteError } from "react-router-dom";

import {
  RiArrowGoBackLine as BackIcon,
  RiHome2Line as HomeIcon,
} from "react-icons/ri";

import { PrimaryButton } from "components/UI";

import styles from "./Error.module.css";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className={styles.errorPage}>
      Error
      <p>{error.message || error.status}</p>
      <PrimaryButton onClick={() => navigate(-1)}>
        <BackIcon /> Go back
      </PrimaryButton>
      <PrimaryButton onClick={() => navigate("/")}>
        <HomeIcon /> Go home
      </PrimaryButton>
    </div>
  );
};
