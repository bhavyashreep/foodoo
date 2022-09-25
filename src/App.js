import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./presentation/common/Routes";
import { PrimaryLoadingIndicator } from "./presentation/common/UI/LoadingIndicator";

//import static css to override antd

import "antd/dist/antd.min.css";
import LayoutProvider from "./presentation/Layout";

//component imports

const Dashboard = React.lazy(() => import("./presentation/Dashboard"));
const Expanded = React.lazy(() => import("./presentation/Expanded/index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<PrimaryLoadingIndicator text="Loading..." isFullPage />}
      >
        <LayoutProvider>
          <Routes>
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
            <Route path={routes.EXPANDED} element={<Expanded />} />
          </Routes>
        </LayoutProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
