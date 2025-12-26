import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../../lib/supabaseClient";

const AuthCallback = () => {
  const supabase = createClient();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectUser = async () => {
      await new Promise((res) => setTimeout(res, 200));
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();
        if (!session || sessionError) {
          navigate("/", { replace: true });
          return;
        }

        const user = session.user;

        // Fetch profile
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("name")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error(profileError);
          navigate("/", { replace: true });
          return;
        }

        if (profile?.name) {
          // Name not set -> onboarding
          navigate("/onboarding", { replace: true });
        } else {
          navigate("/dashboard/earn-rewards", { replace: true });
        }
      } catch (err) {
        console.error(err);
        navigate("/", { replace: true });
      }
    };

    redirectUser();
  }, [navigate, supabase]);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <img
        src="/src/assets/logo.webp"
        alt="Flowva Logo"
        className="w-12 animate-pulse"
      />
      <p className="text-black mt-2">Redirecting...</p>
    </div>
  );
};

export default AuthCallback;
