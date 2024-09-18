import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./context/RequireAuth"; // Ensure correct path
import Header from "./component/Header";
import { useState } from "react";
import { CountryCoordinates } from "../src/context/ContextApi";
import { Provider } from "react-redux";
import store from "../src/store/store";
const Dashboard = lazy(() => import("../src/component/Dashboard"));
const Signup = lazy(() => import("../src/component/Signup"));
const Login = lazy(() => import("../src/component/Login"));
const ForgotPassword = lazy(() => import("../src/component/ForgotPassword"));

// App component for layout and context provider
function App() {
  const { currentUser } = useAuth();
  const [country, setCountry] = useState({ code: "CH", name: "Switzerland" });

  return (
    <div className="bg-[#1d232a]">
        <Provider store={store}>
          <CountryCoordinates.Provider value={{ country, setCountry }}>
            <AuthProvider>
              {currentUser ? <Header /> : null}
              <Outlet />
              <Toaster />
            </AuthProvider>
          </CountryCoordinates.Provider>
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
    ],
    errorElement: <div>404 - Page not found</div>,
  },
]);
