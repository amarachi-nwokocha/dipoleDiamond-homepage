import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import footer from '../assets/footer.svg'


const Footer = () => {
  return (
    <div className='text-[13px]'>
      <footer className="w-full p-6 bg-[#231F20] h-full grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-white">
        <div>
            <img src={footer} alt="" />
          <p>
            dipoleDIAMOND is an Intelligent Process Automation (IPA) consulting
            firm that provides digital transformation solutions tailored to the
            needs of financial institutions and other businesses. Since 2015, we
            have helped our clients reduce costs significantly, gain insights,
            and increase efficiency and employee productivity.
          </p>
        </div>
        <div>
            <ul className='m-10'>
                <li  className='p-0 text-[14px]'>Business Process Management</li>
                <li  className='p-0 text-[14px]'>Robotic Process Automation</li>
                <li  className='p-0 text-[14px]'>Digital Assistant Chatbox</li>
                <li className='p-0 text-[14px]' >Software Development & Integration</li>
                <li  className='p-0 text-[14px]'>ProcessMaker Reporting & Analytics</li>
            </ul>
        </div>
        <div>
            <ul className='m-10'>
                <li className='p-0 text-[14px]' >8, Kolawole Oki Close, off Ilawe Street, Ilawe Estate, Ifako-Gbagada,Lagos, Nigeria</li>
                <li className='p-0 text-[14px]' >info@dipolediamond.com</li>
                <li className='p-0 text-[14px]' >+234(0) 809 367 3565</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Follow us on social media</li>
                <li>
                    <div className='flex flex-row gap-4'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </li>
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
