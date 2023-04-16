import { ComingSoon } from "@/components/Utils"
import { ExampleHomePage } from "@/features/example-feature"

const publicRoutes =  [
    {
        path: "/",
        element: <ExampleHomePage/>,
        errorElement: <pre>Error Occured</pre>,
      },
      {
        path: "/new-feature",
        element: <ComingSoon item="New feature" />,
      }
]

export default publicRoutes