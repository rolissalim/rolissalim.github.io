import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** PROTECTED ROUTE / GUARD */
import Error404 from "./components/Error/Error404";
import TopBarLoader from "./components/Loader/TopBarLoader";

const Index = React.lazy(() => import("@app/pages/index"))

function App(): React.ReactElement {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            <Router>
                <Routes >
                    <Route
                        path='*'
                        element={
                            <React.Suspense fallback={<TopBarLoader />}>
                                <Index />
                            </React.Suspense>
                        }
                    />

                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
        </>

    );
}

export default App;