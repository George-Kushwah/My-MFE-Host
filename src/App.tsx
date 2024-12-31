import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from "react-router-dom";
import "./Assets/css/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from 'react-redux';
import { store } from "apps/Store"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import About from 'apps/About';


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="about" element={<About />} />
      {/*<Route path="life-cycle" element={<Lifecycle />} />
      <Route path="hoc" element={<Hoc />} />
      <Route path="hooks" element={<Hooks />} />
      <Route path="props" element={<Propstypes />} />
      <Route path="User/:idname" loader={Datas} element={<Drop />} /> */}
    </Route>
  )
);

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>
)