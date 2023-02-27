import { MobileNavbar, DesktopNavbar } from "components/Navbar";
import { MobileFooter, DesktopFooter } from "components/Footer";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.mainLayout}>
      {width < 501 ? <MobileNavbar /> : <DesktopNavbar />}
      <div className={styles.content}>{children}</div>
      {width < 501 ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
};
