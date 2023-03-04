import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./SearchResultsLayout.module.css";

export const SearchResultsLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.searchResultsLayout}>
      <div className={styles.header}>
        {width < 501 ? <p>Mobile Header</p> : <p>Desktop header</p>}
      </div>
      <div className={styles.content}>{children}</div>
      {width < 501 ? <p>Mobile footer</p> : <p>Desktop footer</p>}
    </div>
  );
};
