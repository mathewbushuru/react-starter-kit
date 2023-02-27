import { RouterProvider } from "react-router-dom";

import { appRouter } from "routes";

export default function AppProvider() {
  return <RouterProvider router={appRouter} />;
}
