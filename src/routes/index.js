import { createBrowserRouter } from "react-router-dom";

import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";

import searchRoutes from "features/example-feature/routes";

const aunthenticated = false;

const commonRoutes = [...publicRoutes, ...searchRoutes];

const routes = aunthenticated
  ? [...commonRoutes, ...protectedRoutes]
  : commonRoutes;

export const appRouter = createBrowserRouter(routes);
