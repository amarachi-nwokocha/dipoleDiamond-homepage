import elipse from '../assets/Ellipse1.svg'
const Elipse = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-around">
            <div className='p-4'>
                <img src={elipse} alt="" />
            </div>
            <div className='lg:w-[27vw] px-3 w-full'>
              <p className='text-center mx-10 my-10 font-bold text-2xl'>
              Future-proof your business.
              </p>
                <p className='text-center font-medium text-xl'>
                We believe technology should make your work life easier without costing a fortune. Stop losing valuable man-hours to monotonous and manual business processes that results in your people feeling frustrated and bogged-down.
                </p>
                <div className='text-center my-10'>
                <button>REQUEST DEMO</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Elipse