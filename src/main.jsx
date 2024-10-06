import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/Boundary/NavBar.jsx";
import Footer from "./components/Boundary/Footer.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LearnerLandingPage from "./components/Landing/LearnerLandingPage.jsx";
import InstructorLandingPage from "./components/Landing/InstructorLandingPage.jsx";
import LoginModal from "./components/Auth/LoginModal.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import VerifyCode from "./components/Auth/VerifyCode.jsx";
import SetNewPassword from "./components/Auth/SetNewPassword.jsx";

const Layout = () => {
return(
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<App/>
            },
            {
                path:"/learnerpage",
                element:<LearnerLandingPage/>
            },
            {
                path:"/instructorpage",
                element:<InstructorLandingPage/>
            },
            {
                path:"/login",
                element:<LoginModal/>
            },
            {
                path:"/forgotpassword",
                element:<ForgotPassword/>
            },
            {
                path:"/verifycode",
                element:<VerifyCode/>
            },
            {
                path:"/setpassword",
                element:<SetNewPassword/>
            }
        ]
    }
])


createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>);