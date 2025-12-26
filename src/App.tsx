import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/dashboard/dashboard";
import SigninPage from "./pages/auth/signin";
import SignupPage from "./pages/auth/signup";
import RewardsPage from "./pages/rewards/rewards-page";
import Onboarding from "./pages/auth/onboarding";
import { PublicRoute } from "./routes/public-routes";
import { ProtectedRoute } from "./routes/protected-routes";
import AuthCallback from "./pages/auth/callback";

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              {" "}
              <SigninPage />{" "}
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              {" "}
              <SignupPage />{" "}
            </PublicRoute>
          }
        />
        <Route
          path="/callback"
          element={
            <PublicRoute>
              {" "}
              <AuthCallback />{" "}
            </PublicRoute>
          }
        />
        <Route
          path="/onboarding"
          element={
            <PublicRoute>
              {" "}
              <Onboarding />{" "}
            </PublicRoute>
          }
        />

        <Route
          element={
            <ProtectedRoute>
              {" "}
              <DashboardLayout />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/earn-rewards" element={<RewardsPage />} />
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
