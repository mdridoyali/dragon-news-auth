
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from './../Layout/Root';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivetRoute from "./PrivetRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root> ,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
])
export default routes