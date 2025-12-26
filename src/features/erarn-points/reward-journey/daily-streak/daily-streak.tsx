import { useEffect, useState } from "react";
import { createClient } from "../../../../lib/supabaseClient";
import { FaRegCalendar } from "react-icons/fa6";
import { LuZap } from "react-icons/lu";
import StreakModal from "../../../modals/streakModal";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const DailyStreak = () => {
  const [streak, setStreak] = useState<any | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const [loadClaim, setloadClaim] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const supabase = createClient();

  useEffect(() => {
    const fetchUserStreak = async () => {
      try {
        // Get the currently authenticated user
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          // setError("No authenticated user found.");
          // setLoading(false);
          return;
        }

        // Fetch the user's streak from 'streaks' table

        let { data: streaks, error } = await supabase
          .from("streaks")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) throw error;

        setStreak(streaks);
      } catch (err: any) {
        console.error(err);
        // setError(err.message);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchUserStreak();
  }, []);

  const claimToday = async () => {
    if (!streak) return;
    setloadClaim(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    // Call Supabase RPC to update streak and profiles
    const { error } = await supabase.rpc("claim_streak", {
      p_user_id: user.id,
    });
    if (error) return;

    // Update local state
    setStreak((prev: any) => ({
      ...prev,
      current_streak: prev.current_streak + 1,
    }));
    setloadClaim(false);
    setShowModal(true);
  };

  const todayIndex = (new Date().getDay() + 6) % 7;

  const claimedIndexes = streak
    ? Array.from(
        { length: streak.current_streak },
        (_, i) => (todayIndex - i + 7) % 7
      )
    : [];
  const claimedToday = claimedIndexes.includes(todayIndex);

  return (
    <>
      <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
        <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
            <FaRegCalendar className="text-[#70D6FF] h-5 w-5" />
            Daily Streak
          </h3>
        </div>
        <div className="p-4">
          <h4 className="font-extrabold text-left text-[36px] text-[#9013fe] mb-2">
            {streak?.current_streak} day
          </h4>
          <div className="flex mt-4 space-x-2 justify-center">
            {DAYS.map((day, i) => {
              const isClaimed = claimedIndexes.includes(i);

              const isToday = i === todayIndex;

              let className =
                "h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200   ";

              if (isClaimed)
                className +=
                  " bg-[#70D6FF] border-4 border-cyan-200 text-white ";
              else if (isToday)
                className +=
                  " ring-2 ring-[#9013fe] ring-offset-2 text-gray-500 bg-gray-200 ";
              else className += " bg-gray-200 text-gray-500 ";

              return (
                <div key={i} className={className}>
                  {day}
                </div>
              );
            })}
          </div>
          <p className="text-[0.875rem] text-gray-600 text-center mt-3">
            Check in daily to to earn +5 points
          </p>
          <button
            onClick={claimToday}
            disabled={claimedToday || loadClaim}
            className={`mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
              claimedToday
                ? "bg-gray-200 text-gray-500"
                : "bg-[#9013fe] text-white"
            } hover:shadow-[0_4px_12px_rgba(144,19,254,0.2)] hover:-translate-0.5`}
          >
            {loadClaim ? (
              <div className="rounded-full size-5 border-2 border-t-white animate-spin"></div>
            ) : (
              <LuZap className="size-5" />
            )}
            {loadClaim ? "Claiming..." : "Claim Today's Points"}
          </button>
        </div>
      </div>
      {showModal && <StreakModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default DailyStreak;
