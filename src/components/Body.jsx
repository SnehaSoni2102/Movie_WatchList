import { Login } from "./Login"
import { SearchMovie } from "./SearchMovies"
import { RouterProvider,createBrowserRouter } from "react-router-dom";


export const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/search",
            element:<SearchMovie/>
        },
       ]);
    return(
    <div>
      <RouterProvider router={appRouter} />
    </div>
    )
}