import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./context/RequireAuth"; // Ensure correct path
import Header from "./component/Header";

// Lazy loading components for optimization
const Dashboard = lazy(() => import("../src/component/Dashboard"));
const Signup = lazy(() => import("../src/component/Signup"));
const Login = lazy(() => import("../src/component/Login"));
const ForgotPassword = lazy(() => import("../src/component/ForgotPassword"));

// App component for layout and context provider
function App() {
  return (
    <AuthProvider>
      <Container>
        <Header />
        <Outlet />
        <Toaster />
      </Container>
    </AuthProvider>
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
        element: <Navigate to="/signup" />, // Redirect root path to sign-up
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

// // Define all routes with lazy-loaded components
// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Dashboard />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/update-profile",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <UpdateProfile />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <RequireAuth>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Signup />
//             </Suspense>
//           </RequireAuth>
//         ),
//       },
//       {
//         path: "/login",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Login />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/forgot-password",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <ForgotPassword />
//           </Suspense>
//         ),
//       },
//     ],
//     errorElement: <div>404 - Page not found</div>,
//   },
// ]);
