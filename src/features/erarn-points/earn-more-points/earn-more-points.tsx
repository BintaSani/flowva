import EarnAndWin from "./refer-and-win/earn-and-win";
import ShareYourStack from "./share-your-stack/share-your-stack";

const EarnMorePoints = () => {
  return (
    <div className="space-y-6">
      {" "}
      <h2 className=" text-lg text-left md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
        Earn More Points
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <EarnAndWin />
        <ShareYourStack />
      </div>
    </div>
  );
};

export default EarnMorePoints;
