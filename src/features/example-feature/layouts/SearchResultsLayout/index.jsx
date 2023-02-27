import {
  MobileSearchResultsHeader,
  DesktopSearchResultsHeader,
} from "features/example-feature/components";
import { MobileFooter, DesktopFooter } from "components/Footer";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./SearchResultsLayout.module.css";

export const SearchResultsLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.searchResultsLayout}>
      <div className={styles.header}>
        {width < 501 ? (
          <MobileSearchResultsHeader />
        ) : (
          <DesktopSearchResultsHeader />
        )}
      </div>
      <div className={styles.content}>{children}</div>
      {width < 501 ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
};
