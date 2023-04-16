import { createBrowserRouter } from "react-router-dom";

import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";
import featureRoutes from "@/features/example-feature/routes";

const commonRoutes = [...publicRoutes, ...featureRoutes];

const authenticated = false;

const routes = authenticated
  ? [...commonRoutes, ...protectedRoutes]
  : commonRoutes;

export const appRouter = createBrowserRouter(routes);
