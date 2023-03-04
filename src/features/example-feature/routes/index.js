import { AboutPage } from "../pages";
import { ErrorPage } from "globalPages";

const featureRoutes = [
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
];

export default featureRoutes;
