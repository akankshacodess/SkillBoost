import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Footer() {
    const [submit, setSubmit] = useState('Submit Here');
    const [phone, setPhone] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setSubmit('Thank You')
    };

  return (
    <footer id="Footer" className="bg-gray-800 text-white py-8">
        <form className="max-w-lg mx-auto flex flex-col space-y-4" onSubmit = {handleClick}>
        <h2 className="text-xl font-bold mb-4">Ready to level up..? </h2>
            <input type="text" placeholder='Enter your name' required className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-gray-90"/>

            <input type="number" placeholder='Enter your phone number' required maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.slice(0, 10))} className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"/>

            <input type="text" placeholder='Enter your profession' required className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"/>

            <input type="text" placeholder='Enter your email id'  className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"/>

            <input type="text" placeholder='Have a Query? We&rsquo;re just a text away...' required className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"/>

            <button onClick={handleClick} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition p-5 self-center">
                {submit}
            </button>
        </form>


      <div className="mt-17 container mx-auto flex justify-between">
        <div className="ml-5 flex flex-col">
          <h2 className=" text-xl font-bold mb-2">Follow Us</h2>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/akanksha-gupta-86806921b" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </a>
            <a href="https://github.com/akankshacodess" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
            <a href="/" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p>Email: support@skillboost.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-600" />
      <p className="text-center text-sm">
        © {new Date().getFullYear()} SkillBoost. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

