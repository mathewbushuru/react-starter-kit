import { ComingSoon } from "@/components/utils"
import { ExampleHomePage } from "@/features/example-feature"
import { ErrorPage } from "@/globalPages"

const publicRoutes =  [
    {
        path: "/",
        element: <ExampleHomePage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/new-feature",
        element: <ComingSoon item="New feature" />,
      }
]

export default publicRoutes