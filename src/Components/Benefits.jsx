import { BiSolidPieChartAlt } from "react-icons/bi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
const Benefits = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold my-6 text-textBlue">
            The DipoleDIAMOND Benefits
          </h1>
          <p>
            This is how we impact and benefit your business to increase your
            market shares.
          </p>
        </div>
        <div className="flex my-20 ml-10 sm:ml-0 md:mx-10 lg:mx-32 flex-col md:flex-row gap-6 justify-around align-middle">
          {/* card 1 */}
          <div className="bg-[#1A74BB0F] w-[300px] h-auto p-6 rounded-xl">
            <div className="bg-textBlue p-6 w-[80px] rounded-md ">
              <HiMiniArrowTrendingUp size={30} className="text-white" />
            </div>
            <h3 className="font-bold text-xl my-5">Increase Productivity</h3>
            <p className="text-[#00000099]">
              Eliminate bottlenecks, reduce human errors, thereby empowering
              your team to work smarter and get more work done.
            </p>
          </div>
          {/* card 1 end */}
          {/* card 2 */}
          <div className="bg-[#1A74BB0F] w-[300px] h-auto p-6 rounded-xl">
            <div className="bg-textBlue p-6 w-[80px] rounded-md ">
              <BiSolidPieChartAlt size={30} className="text-white" />
            </div>
            <h3 className="font-bold text-xl my-5">Gain Insights</h3>
            <p className="text-[#00000099]">
              Capture accurate data about your business processes and
              consequently discover new opportunities for cost-savings and
              growth.
            </p>
          </div>
          {/* card 2 end */}
          {/* card 3 */}
          <div className="bg-[#1A74BB0F] w-[300px] h-auto p-6 rounded-xl">
            <div className="bg-textBlue p-6 w-[80px] rounded-md ">
              <HiMiniArrowTrendingDown size={30} className="text-white" />
            </div>
            <h3 className="font-bold text-xl my-5">Reduce Costs</h3>
            <p className="text-[#00000099]">
              Lower your operational overheads and wage expenses, and as a
              result, see rapid ROI on your technology investments.
            </p>
          </div>
          {/* card 3 end */}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
