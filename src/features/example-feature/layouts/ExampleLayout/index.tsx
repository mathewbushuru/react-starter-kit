import { FC, ReactNode } from "react";

import { ScrollTop } from "@/components/Utils";

interface ExampleLayoutProps {
  children: ReactNode;
}

export const ExampleLayout: FC<ExampleLayoutProps> = ({ children }) => {
  return (
    <div>
      <ScrollTop />
      {children}
    </div>
  );
};
