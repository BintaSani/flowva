import React, { createContext, useContext } from "react";
import { createClient } from "../lib/supabaseClient";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToggleProvider } from "./toggleContext";

const supabase = createClient();
const queryClient = new QueryClient();

// Types
type Profile = {
  id: string;
  createdAt: string;
  profile_pic: string;
  password_updated_at: string;
  referral_code: string;
  total_points: number;
  referral_count: number;
  email: string;
  tools: null | [];
  referrer_code: string;
  name: string;
};

type AuthContextType = {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType>({
  profile: null,
  isLoading: true,
  error: null,
});

// Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading } = useQuery<Profile, Error>({
    queryKey: ["profile"],
    queryFn: async () => {
      // Get authenticated user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("No authenticated user");

      // Fetch profile
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      return profileData;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <AuthContext.Provider
      value={{
        profile: data || null,
        isLoading,
        error: error?.message || null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// context hook
export const useAuth = () => useContext(AuthContext);

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ToggleProvider>{children}</ToggleProvider>
    </AuthProvider>
  </QueryClientProvider>
);
