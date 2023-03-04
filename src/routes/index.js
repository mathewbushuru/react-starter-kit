import { createBrowserRouter } from "react-router-dom";

import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";

import featureRoutes from "features/example-feature/routes";

const aunthenticated = false;

const commonRoutes = [...publicRoutes, ...featureRoutes];

const routes = aunthenticated
  ? [...commonRoutes, ...protectedRoutes]
  : commonRoutes;

export const appRouter = createBrowserRouter(routes);
