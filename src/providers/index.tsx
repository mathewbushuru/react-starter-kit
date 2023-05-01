import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { appRouter } from "@/routes";
import globalStore from "@/stores/global-store";
import { Toaster } from "@/components/ui";

const AppProvider: FC = () => {
  return (
    <>
      <ReduxProvider store={globalStore}>
        <RouterProvider router={appRouter} />
      </ReduxProvider>
      <Toaster />
    </>
  );
};

export default AppProvider;
