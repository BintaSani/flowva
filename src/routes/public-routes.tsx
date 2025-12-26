import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/authContext";

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { profile, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return null;

  const publicPaths = ["/", "/signup", "/callback", "/onboarding"];

  if (profile && !publicPaths.includes(location.pathname)) {
    return <Navigate to="/dashboard/earn-rewards" replace />;
  }

  return <>{children}</>;
};
