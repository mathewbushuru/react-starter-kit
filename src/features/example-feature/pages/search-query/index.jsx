// This page is also the global error page
// After encountering any unhandled errors, automatically redirect here

import { useRef } from "react";
import { useRouteError, Form, Link, useSubmit } from "react-router-dom";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiMicrophone as Microphone } from "react-icons/bi";
import { BsCamera as Camera } from "react-icons/bs";

import { MainLayout } from "layouts";
import { PrimaryButton } from "components/UI";
import { MobileTrendingSearches } from "features/example-feature/components";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./SearchQueryPage.module.css";

import googleLogo from "assets/logo.png";

export const SearchQueryPage = () => {
  const { width } = useWindowDimensions();

  const error = useRouteError();
  error && console.error(error);

  const searchFormRef = useRef();
  const submit = useSubmit();

  return (
    <MainLayout>
      <div className={styles.searchQueryPage}>
        {error && (
          <div>Unexpected error: {error.statusText || error.message}</div>
        )}

        <div className={styles.logoWrapper}>
          <img
            src={googleLogo}
            alt="Google Logo"
            className={styles.logoImage}
          />
        </div>

        <div className={styles.main}>
          <Form
            className={styles.searchForm}
            action="/search"
            method="get"
            ref={searchFormRef}
          >
            <input type="search" name="q" id="search_query" />
            <SearchIcon className={styles.searchIcon} />
            <Microphone className={styles.microphoneIcon} />
            <Camera className={styles.cameraIcon} />
          </Form>

          <div className={styles.searchButtons}>
            <PrimaryButton
              className={styles.transparentButton}
              onClick={() => submit(searchFormRef.current)}
            >
              Google Search
            </PrimaryButton>
            <PrimaryButton className={styles.transparentButton}>
              <Link to="/doodles">I'm Feeling Lucky</Link>
            </PrimaryButton>
          </div>

          <div className={styles.otherLanguages}>
            Google offered in: <span> Français</span>
          </div>

          <div className={styles.trendingSearches}>
            {width < 501 && <MobileTrendingSearches />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
