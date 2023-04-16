import { MainLayout } from "@/layouts";
import { ErrorPage } from "@/globalPages";

const featureRoutes = [
  {
    path: "/example-feature",
    element: <MainLayout>Example Feature</MainLayout>,
    errorElement: <ErrorPage/>,
  },
];

export default featureRoutes;
