import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import "./Assets/css/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import { store } from "apps/Store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./component/Header";
import About from "apps/About";
const Service = lazy(() => import("./component/Service"));
const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />}></Route>
    </Route>
  )
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>
);
