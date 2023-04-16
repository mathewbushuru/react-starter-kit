import { ComingSoon } from "@/components/Utils";
import { ErrorPage } from "@/globalPages";

const protectedRoutes = [
    {
      path: "/app",
      element: <ComingSoon item="Dashboard" />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile",
      element: <ComingSoon item="profile" />,
    },
  ];
  
  export default protectedRoutes;