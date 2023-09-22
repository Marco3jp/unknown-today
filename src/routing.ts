import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: IndexPage()
    },
])
