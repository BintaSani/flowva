import React from "react";
import { useAuth } from "../../context/authContext";
import { createClient } from "../../lib/supabaseClient";
import { PiWarningCircle } from "react-icons/pi";
import { useNavigate } from "react-router";

const Onboarding = () => {
  const supabase = createClient();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const [name, setName] = React.useState<string>("");
  // const [loading, setLoading] = React.useState(false);

  const submitName = async () => {
    if (!profile || !profile.id) return;

    // setLoading(true);
    setError(null);

    try {
      // Update the name in profiles
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ name })
        .eq("id", profile.id);

      if (updateError) throw updateError;

      // Call the RPC to generate referral code for this user
      const { error: rpcError } = await supabase.rpc("generate_referral_code", {
        p_user_id: profile.id,
      });

      if (rpcError) throw rpcError;

      // Redirect to dashboard
      navigate("/dashboard/earn-rewards", { replace: true });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-dvh flex justify-center lg:items-center  px-2 relative">
      {error !== null && (
        <div
          className={`absolute top-3 left-[30%] bg-red-500/10 shadow-lg text-[#EF4444] border-red-500/20 border p-3 rounded-md mb-5 text-[12px] flex items-center gap-2`}
        >
          <PiWarningCircle className="size-4" />
          <span>{error}</span>
        </div>
      )}
      <div className="max-w-140 animate-fadeIn w-full bg-white box-border my-8 p-6 lg:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit">
        <div className="min-h-[480px] flex flex-col animate-fadeIn">
          <div className="flex justify-center gap-[0.5rem] mb-[1.5rem]"></div>
          <h2 className="text-[#212529] text-[1.5rem] leading-[1.3rem] mb-[1rem] font-bold text-start">
            What should we call you?
          </h2>
          <p className="text-[0.95rem] text-[#495057] mb-[1.5rem] text-start">
            Enter your first name so we can personalize your experience
          </p>

          <div className="relative group mb-[1.5rem]">
            <input
              type="text"
              className=" peer w-full py-[0.85rem] px-[1rem] border-[2px] rounded-[16px] text-base transition-all ease-linear duration-[.2s] outline-none focus:border-[#9013fe] "
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              required
            />
            <div className="pointer-events-none absolute inset-0 rounded-[16px] peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
          </div>
          <div className="flex flex-row-reverse mt-auto pt-[2rem] w-full gap-[1rem]">
            <button
              onClick={submitName}
              className="inline-flex flex-1 justify-center font-semibold items-center hover:bg-[#A29BFE] transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] duration-[0.25s] hover:translate-y-[-2px] active:translate-y-0 w-full text-white bg-[#9013FE] rounded-[100px] py-[0.875rem] px-[1.5rem] border-none"
            >
              Finish Setup
            </button>
            <button
              disabled={true}
              className="bg-transparent font-medium border-none shadow-none rounded-[16px] hover:text-[#9013FE] hover:underline text-sm"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
