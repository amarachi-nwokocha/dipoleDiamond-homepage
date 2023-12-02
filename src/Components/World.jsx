import group8 from "../assets/Group 8.svg";
import group4 from "../assets/Group 4.svg";
import group5 from "../assets/Group 5.svg";
import group6 from "../assets/Group 6.svg";
import group7 from "../assets/Group 7.svg";
const World = () => {
  return (
    <div className="max-w-[1140px] m-auto  p-4 py-6 w-full h-full bg-cover bg-center bg-[url('/src/assets/world-map.svg')]">
      <h4 className="text-center text-textBlue font-bold">
        We use today&apos;s technologies to help you solve business problems
      </h4>
      <p className="text-center lg:mx-44 text-[18px]">
        Finding tech talent can be hard. Retaining them is even harder. Working
        with us allows you to focus on your business, while we help you with the
        technology solutions that enable you and your team to be more
        productive. Our technology tools include
      </p>
      <div className="max-w-[1140px] m-auto p-4 py-6 w-full">
        <div className=" flex flex-col md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5  text-center">
          <img src={group4} alt="" />
          <img src={group5} alt="" />
          <img src={group6} alt="" />
          <img src={group7} alt="" />
          <img src={group8} alt="" />
        </div>
      </div>
      <div>
        <div className="bg-white max-w-[1140px] m-auto px-10 my-10 py-4 w-full rounded-xl border-2">
          <div>
            <p className="font-semibold text-2xl text-textBlue pt-4 text-center">
              Our Services
            </p>
          </div>
          <div className="flex flex-col justify-around md:flex-row ">
            <div className="py-6  text-center">
            <div className="border-r-4 px-10">
            <h2 className="font-semibold text-2xl text-textBlue text-center mb-2">
                BPM
              </h2>
              <p>Business Process Management</p>
            </div>
            </div>
            <div className="py-6 text-center">
             <div className="border-r-4 px-10">
             <h2 className="font-semibold text-2xl text-textBlue text-center mb-2 ">
                RPA
              </h2>
              <p>Robotics Process Automation</p>
             </div>
            </div>
            <div className="py-6  text-center mb-6">
              <div className="">
              <h2 className="font-semibold text-2xl text-textBlue text-center mb-2">AI</h2>
              <p>Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
