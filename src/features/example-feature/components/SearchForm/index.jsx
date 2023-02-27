import { useRef } from "react";
import { Form, useSearchParams, useSubmit } from "react-router-dom";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiMicrophone as MicrophoneIcon } from "react-icons/bi";
import { BsCamera as CameraIcon } from "react-icons/bs";
import { RxDividerVertical as DividerIcon } from "react-icons/rx";

import styles from "./SearchForm.module.css";

export const SearchForm = ({ className = "", desktopMode = false }) => {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");
  const searchFormRef = useRef();

  return (
    <Form
      className={`${styles.searchForm} ${className}`}
      action="/search"
      method="get"
      ref={searchFormRef}
    >
      <input
        type="search"
        name="q"
        id="search_query"
        defaultValue={searchQuery}
        className={
          desktopMode
            ? `${styles.desktopSearchInput}`
            : `${styles.mobileSearchInput}`
        }
      />
      <SearchIcon
        className={
          desktopMode
            ? `${styles.searchIconDesktop}`
            : `${styles.searchIconMobile}`
        }
        onClick={() => {
          submit(searchFormRef.current);
        }}
      />
      <CameraIcon
        className={
          desktopMode
            ? `${styles.cameraIconDesktop}`
            : `${styles.cameraIconMobile}`
        }
        onClick={() => {
          submit(searchFormRef.current);
        }}
      />
      <MicrophoneIcon
        className={
          desktopMode
            ? `${styles.microphoneIconDesktop}`
            : `${styles.microphoneIconMobile}`
        }
        onClick={() => {
          submit(searchFormRef.current);
        }}
      />
      <DividerIcon
        className={
          desktopMode
            ? `${styles.dividerIconDesktop}`
            : `${styles.dividerIconMobile}`
        }
        onClick={() => {
          submit(searchFormRef.current);
        }}
      />
    </Form>
  );
};
