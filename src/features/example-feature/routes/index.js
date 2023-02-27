import { SearchResultsPage,SearchQueryPage } from "../pages";

const searchRoutes = [
  {
    path: "/search",
    element: <SearchResultsPage />,
    errorElement: <SearchQueryPage />,
  },
];

export default searchRoutes;
