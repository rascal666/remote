import React from 'react';
import { Route, Routes} from "react-router-dom";
import Home from "../components/home/home.jsx";
import Services from "../components/services/services.jsx";
import Buying from "../components/buying/buying.jsx";
import Vacancies from "../components/vacancies/vacancies.jsx";
import Contacts from "../components/contacts/contacts.jsx";
import Tv from "../components/services/pages/tv/tv.jsx";
import Pc from "../components/services/pages/pc/pc.jsx";
import Vacuum from "../components/services/pages/vacuum/vacuum.jsx";
import Laptop from "../components/services/pages/laptop/laptop.jsx";
import Karcher from "../components/services/pages/karcher/karcher.jsx";
import Cofee from "../components/services/pages/cofee/cofee.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";

const AppRoutes = () => {

    const navigationRoutes = [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/buying", element: <Buying /> },
        { path: "/vacancies", element: <Vacancies /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/tv", element: <Tv /> },
        { path: "/pc", element: <Pc /> },
        { path: "/vacuum", element: <Vacuum /> },
        { path: "/laptop", element: <Laptop /> },
        { path: "/karcher", element: <Karcher /> },
        { path: "/cofee", element: <Cofee /> },
    ]

    return (
        <Routes>
            {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    );
};

export default AppRoutes;