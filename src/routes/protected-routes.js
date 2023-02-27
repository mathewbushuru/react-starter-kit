import { ComingSoon } from "components/UtilComponents";

const protectedRoutes = [
  {
    path: "/app",
    element: <ComingSoon />,
    errorElement: <ComingSoon />,
    children: [
      {
        errorElement: <ComingSoon />,
        children: [
          {
            path: "/profile",
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },
];

export default protectedRoutes;
