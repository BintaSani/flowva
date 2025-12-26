import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { profile, isLoading } = useAuth();

  if (isLoading) return null;
  if (!profile) return <Navigate to="/" replace />;

  return children;
};
