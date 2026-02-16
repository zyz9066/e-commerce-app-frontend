import { lazy } from "react";

const SignIn = lazy(() => import("../../views/authentication/SignIn"));
const SignUp = lazy(() => import("../../views/authentication/SignUp"));

const publicRoutes = [
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
];

export default publicRoutes;
