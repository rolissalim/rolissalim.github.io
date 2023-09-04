import Error404 from '@app/components/Error/Error404'
import TopBarLoader from '@app/components/Loader/TopBarLoader'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function ExploreRoute() {
    /** PAGE */
    const Page = React.lazy(() => import("@app/pages/Explore/ExplorePage"))
    return (

        <Routes>
            <Route path="" element={<React.Suspense fallback={<TopBarLoader />}><Page /></React.Suspense>} />
            <Route path="*" element={<Error404 type="admin" />}></Route>
        </Routes>
    )
}

export default ExploreRoute
