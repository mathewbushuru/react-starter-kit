import { HomePage } from "features/example-feature/pages";
import { ErrorPage } from "globalPages";
import { ComingSoon } from "components/UtilComponents";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-feature",
    element: <ComingSoon item="New feature" />,
  }
];

export default publicRoutes;
