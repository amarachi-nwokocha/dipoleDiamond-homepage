import hero from '../assets/Group 3.svg'
const Hero = () => {
  return (
  
        <div className="min-h-[30vh] flex flex-col md:flex-row md:justify-between  md:mx-32 mx-5 mt-5">
            <div className='md:w-96'>
                <h1 className="font-bold text-5xl my-6 md:w-[500px] md:my-10 md:leading-[3.6rem]">Empowering Businesses Through Intelligent Automation</h1>
                <p className="text-3xl md:w-[500px] md:leading-[3rem]  font-medium">Join the ranks of businesses transforming their operations with our expertise.</p>
                <div className="flex py-6 gap-7">
                    <button>REQUEST DEMO</button>
                    <button className='bg-white text-textBlue border-2 border-textBlue'>LEARN MORE </button>
                </div>
            </div>
            <div className="w-full md:w-2/4 ">
                <img src={hero} alt="" className='' />
            </div>
        </div>
  )
}

export default Hero