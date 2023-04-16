import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "@/routes";

const AppProvider: FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppProvider;
