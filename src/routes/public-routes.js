import { SearchQueryPage } from "features/example-feature/pages";
import { ComingSoon } from "components/UtilComponents";

const publicRoutes = [
  {
    path: "/",
    element: <SearchQueryPage />,
    errorElement: <SearchQueryPage />,
  },
  {
    path: "/about",
    element: <ComingSoon item="About page" />,
  },
  {
    path: "/auth",
    element: <ComingSoon item="Authentication" />,
  },
  {
    path: "/doodles",
    element: <ComingSoon item="Doodles" />,
  },
  {
    path: "/gmail",
    element: <ComingSoon item="Gmail" />,
  },
  {
    path: "/images",
    element: <ComingSoon item="Google Images" />,
  },
  {
    path: "/store",
    element: <ComingSoon item="Store page" />,
  },
];

export default publicRoutes;
