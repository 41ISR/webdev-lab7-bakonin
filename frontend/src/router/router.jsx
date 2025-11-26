import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn/"
import Layout from "../pages/Layout"
import Board from "../pages/Board"
import Logout from "../pages/Logout"
import MyMessages from "../pages/MyMessages"
import AuthGuard from "../components/AuthGuard"

export const router = createBrowserRouter(
    [
        {
            path: "/Signup",
            element: <SignUp />
        },  
        {
            path: "/Signin",
            element: <SignIn />
        },
        {
            path: "/Logout",
            element: <Logout/>,
        },

        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Board />
                },
                {
            path: "/MyMessages",
            element: (
                <AuthGuard>
                    <MyMessages/>
                </AuthGuard>
            )

                }
            ]
        }
    ]
)