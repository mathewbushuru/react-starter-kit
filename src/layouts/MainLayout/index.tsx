import { FC } from "react";

import { ScrollTop } from "@/components/Utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <ScrollTop />
      {children}
    </div>
  );
};
