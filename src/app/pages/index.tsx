import React, { useEffect } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom';

import AppsLayout from "@app/modules/AppsLayout/AppsLayout";
import Error404 from "@app/components/Error/Error404";
import TopBarLoader from '@app/components/Loader/TopBarLoader';
import ProjectRoute from '@app/pages/Project/ProjectRoute';
import ExploreRoute from './Explore/ExploreRoute';
import FreelanceRoute from './Freelance/FreelanceRoute';



const HomePage = React.lazy(() => import("@app/pages/Home/HomePage"))
const AboutMePage = React.lazy(() => import("@app/pages/AboutMe/AboutMePage"))
const ContactPage = React.lazy(() => import("@app/pages/Contact/ContactPage"))

// import axios from 'axios';

/** PAGE COMPONENT */


/**
 * NOTE: ROUTING APPS PAGE ADA DISINI
 * @returns 
 */
export default function AppsPage(): React.ReactElement {

    useEffect(() => {
        document.body.classList.remove("overflow-hidden");
        document.body.removeAttribute('style');
        return () => {
            document.body.style.overflow = "hidden"
        }
    }, [])
    return (
        <>
            <Routes>
                <Route path="/*" element={<AppsLayout />}>
                    <Route path="" element={<HomePage />}></Route>
                    <Route path="home" element={<HomePage />}></Route>
                    <Route path="about-me" element={<AboutMePage />}></Route>
                    <Route path="project/*" element={
                        <React.Suspense fallback={<TopBarLoader />}>
                            <ProjectRoute />
                        </React.Suspense>
                    }></Route>
                    <Route path="explore/*" element={
                        <React.Suspense fallback={<TopBarLoader />}>
                            <ExploreRoute />
                        </React.Suspense>
                    }></Route>
                    <Route path="freelance/*" element={
                        <React.Suspense fallback={<TopBarLoader />}>
                            <FreelanceRoute />
                        </React.Suspense>
                    }></Route>
                    <Route path="*" element={<Error404 type="admin" />}></Route>
                </Route>
            </Routes>
        </>
    )
}