import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.mainLayout}>
      {width < 501 ? <p>MobileNavbar </p> : <p>DesktopNavbar </p>}
      <div className={styles.content}>{children}</div>
      {width < 501 ? <p>MobileFooter </p> : <p>DesktopFooter </p>}
    </div>
  );
};
