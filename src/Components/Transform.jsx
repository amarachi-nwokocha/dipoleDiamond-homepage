import code from "../assets/Rectangle 160.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import { LuBarChart } from "react-icons/lu";
import { FaPlaneDeparture } from "react-icons/fa";
const Transform = () => {
  return (
    <div className="bg-[#1A74BB0F] my-40 py-10">
      <div className="flex flex-col md:flex-col lg:flex-row  lg:justify-between  md:mx-20 mx-5 mt-10">
        <div className="">
          <h2 className="text-5xl w-4/4 sm:w-2/4  md:text-5xl font-bold text-textBlue md:w-2/4 h-[200px] leading-[3rem]">
            Transform your business in 4 simple steps
          </h2>
          <img src={code} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:mx-10 ml-10 sm:ml-0  sm:grid-cols-2 gap-20 mt-5">
          <div>
            <div className="w-[17rem]">
              <div className="bg-textBlue p-6 w-[80px] rounded-md ">
                <FaPhoneAlt size={30} className="text-white" />
              </div>
              <div className="w-[10rem] my-9">
                <h3 className="text-2xl font-semibold">
                  Schedule an Online Demo
                </h3>
              </div>
              <div>
                <p  className="text-[#00000099]">
                  We will review your processes and tailor a presentation and
                  demo, showing you how intelligent process automation can help
                  your business.
                </p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div>
            <div className="w-[17rem]">
              <div className="bg-textBlue p-6 w-[80px] rounded-md ">
                <RiCalendar2Line size={30} className="text-white" />
              </div>
              <div className="w-[15rem] my-7">
                <h3 className="text-2xl font-semibold">
                Schedule an <br /> On-Site Demo
                </h3>
              </div>
              <div>
                <p  className="text-[#00000099]">
                  See real-world use of our solutions. We will setup a
                  site-visit to one of our customers or you can opt for a paid
                  proof-of-concept in your environment.
                </p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div>
            <div className="w-[17rem]">
              <div className="bg-textBlue p-6 w-[80px] rounded-md ">
                <FaPlaneDeparture size={30} className="text-white" />
              </div>
              <div className="w-[10rem] my-9">
                <h3 className="text-2xl font-semibold">Start your pilot</h3>
              </div>
              <div>
                <p  className="text-[#00000099]">
                  Begin your transformation journey. We will help you implement
                  the right solution(s), identify and automate one or two
                  quick-win processes.
                </p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div>
            <div className="w-[17rem]">
              <div className="bg-textBlue p-6 w-[80px] rounded-md ">
                <LuBarChart size={30} className="text-white" />
              </div>
              <div className="w-[15rem] my-7">
                <h3 className="text-2xl font-semibold">
                  Scale your <br /> business&apos;s success
                </h3>
              </div>
              <div>
                <p  className="text-[#00000099]">
                  Roll out the solution across the entire organization. Train
                  your team, set up your Centre of Excellence, and automate more
                  processes intelligently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
