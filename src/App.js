import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./context/RequireAuth"; // Ensure correct path
import Header from "./component/Header";
import { useState } from "react";
import {
  CityCoordinates,
  CountryCoordinates,
  HotelDetailsId,
} from "../src/context/ContextApi";
import { Provider } from "react-redux";
import store from "../src/store/store";
import HotelDetails from "./component/HotelDetails";
import BottomFooter from "./component/Footer";
import ErrorPage from "./component/ErrorPage";
import MoreImages from "./component/MoreImages";
const Dashboard = lazy(() => import("../src/component/Dashboard"));
const Signup = lazy(() => import("../src/component/Signup"));
const Login = lazy(() => import("../src/component/Login"));
const ForgotPassword = lazy(() => import("../src/component/ForgotPassword"));

// App component for layout and context provider
function App() {
  const { currentUser } = useAuth();
  const [country, setCountry] = useState({ code: "CH", name: "Switzerland" });
  const [city, setCity] = useState({ city: "Zürich" });
  const [id, setId] = useState({ id: "lp19c62" });
  return (
    <div className="bg-[#1d232a]">
      <Provider store={store}>
        <HotelDetailsId.Provider value={{ id, setId }}>
          <CountryCoordinates.Provider value={{ country, setCountry }}>
            <CityCoordinates.Provider value={{ city, setCity }}>
              <AuthProvider>
                {currentUser ? <Header /> : null}
                <Outlet />
                <Toaster />
                {currentUser ? <BottomFooter /> : null}
              </AuthProvider>
            </CityCoordinates.Provider>
          </CountryCoordinates.Provider>
        </HotelDetailsId.Provider>
      </Provider>
    </div>
  );
}

export default App;
// Define all routes with lazy-loaded components
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/signup" />,
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: "/MoreImages",
        element: (
          <RequireAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <MoreImages />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: "/HotelDetails/:hotelId",
        element: (
          <RequireAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <HotelDetails />
            </Suspense>
          </RequireAuth>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
