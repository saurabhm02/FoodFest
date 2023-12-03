import {FaCopyright} from 'react-icons/fa6'
import {FiHeart} from 'react-icons/fi'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <div className="icon heart mx-2"> <FiHeart/> </div>
        <a
          href="https://www.linkedin.com/in/saurabh-mahapatra-a5a17321b/"
          target="_blank"
          title="Saurabh Mahapatra's Linkedin Profile"
        >
          Saurabh Mahapatra
        </a>
          <div className='icon mx-2'> <FaCopyright/> </div>
          {year}
          <strong>
            Food<span>Fest</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;