import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Ensure the correct path to your AuthContext

export default function RequireAuth({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/signup" />;
  }

  // If the user is authenticated, allow them to access the route
  return children;
}
