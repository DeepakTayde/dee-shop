import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import ErrorPage from '../pages/ErrorPage.jsx'
import AboutPage from "../pages/AboutPage.jsx";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement: <ErrorPage/>,
        children : [
            {
                path : "",
                element : <Home/>
            }, 
            {
                path : "about",
                element : <AboutPage/>
            }
        ],

    },
])
export default router