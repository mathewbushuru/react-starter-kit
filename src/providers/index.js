import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import globalStore from "stores/redux/globalStore";

import { appRouter } from "routes";

export default function AppProvider() {
  return (
    <ReduxProvider store={globalStore}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
  );
}
