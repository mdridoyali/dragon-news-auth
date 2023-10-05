import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6 '>
        <h2>Login With</h2>
        <button className="btn btn-outline w-full ">
        <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full ">
        <FaGithub></FaGithub>
          Github
        </button>
      </div>
      {/* Social icon */}
      <div className='p-4  mb-6  '>
        <h2>Find us on</h2>
       <a href='#' className='p-4 flex items-center text-lg border-2 rounded-t-lg ' > <FaFacebook className='text-2xl ' ></FaFacebook> Facebook </a>
       <a href='#' className='p-4 flex items-center text-lg border-x-2  ' > <FaTwitter className='text-2xl ' ></FaTwitter> Twitter  </a>
       <a href='#' className='p-4 flex items-center text-lg border-2 rounded-b-lg ' > <FaYoutube className='text-2xl ' ></FaYoutube> Youtube  </a>
      </div>
      {/* Q zone */}
      <div className='p-4 space-y-3 mb-6 '>
        <h2>Q Zone</h2>
       <img src={qZone1} />
       <img src={qZone2} />
       <img src={qZone3} />
      </div>
    </div>
  );
};

export default RightSideNav;
  