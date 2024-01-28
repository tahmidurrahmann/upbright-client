import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import FounderMessage from "../pages/Founder/FounderMessage";
import OurTeachers from "../pages/About/OurTeachers";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/founderMessage",
                element : <FounderMessage />
            },
            {
                path : "/whoWeAre",
                element : <About />
            },
            {
                path : "/contactUs",
                element : <ContactUs />
            },
            {
                path : "/ourTeachers",
                element : <OurTeachers />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            },
        ]
    }
])

export default router;