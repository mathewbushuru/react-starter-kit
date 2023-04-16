const protectedRoutes = [
    {
      path: "/app",
      element: <h1>Dashboard</h1>,
      errorElement: <pre>Error Occured</pre>,
    },
    {
      path: "profile",
      element: <h1>Profile Page</h1>,
    },
  ];
  
  export default protectedRoutes;