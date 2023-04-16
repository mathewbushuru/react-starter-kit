import { createBrowserRouter } from "react-router-dom";

import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";

// const commonRoutes = [...publicRoutes, ...featureRoutes];
const commonRoutes = [...publicRoutes];

const authenticated = false;

const routes = authenticated
  ? [...commonRoutes, ...protectedRoutes]
  : commonRoutes;

export const appRouter = createBrowserRouter(routes);
