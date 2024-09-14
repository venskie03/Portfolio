import HomePage from "../layout/homePage";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

export const publicRoutes = [
    {
        path: "*",
        element: HomePage
    }
]

export const AllRoutes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/about",
        element: About
    },
    {
        path: "/skills",
        element: Skills
    },
    {
        path: "/myprojects",
        element: Projects
    },
]

