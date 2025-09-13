import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer >
        <div  className="bg-[#0a4182] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-sm">
            <li> <Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            {/* <li>Public information</li> */}
            <li><Link to="/what-we-do" className="hover:text-orange-400">What we do</Link></li>
            <li><Link to="/how-it-works" className="hover:text-orange-400">How it works</Link></li>
            <li><Link to="/faqs" className="hover:text-orange-400">
          FAQs
        </Link></li>
            <li><Link to="/donate" className="text-orange-400 font-semibold">
          Donate For A Cause
        </Link></li>
            <li><Link to="/achievements" className="hover:text-orange-400">Achievements</Link></li>
            <li> <Link to="/pledge" className="hover:text-orange-400">Make A Pledge</Link></li>
            {/* <li>Myth Busters</li> */}
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Quick Enquiry Form */}
        <div>
          <h2 className="font-bold text-lg mb-4">QUICK ENQUIRY</h2>
          <form className="space-y-3 text-black">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 rounded"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full px-3 py-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full px-3 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="font-bold text-lg mb-4">MAP</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.915340699122!2d77.583!3d12.962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167eafdcbfff%3A0x123456789!2sUrvashi%20Cinema!5e0!3m2!1sen!2sin!4v1631439150000!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg mb-4 uppercase">
            LIONS INTERNATIONAL EYE BANK, BANGALORE
          </h2>
          <p className="text-sm leading-relaxed">
            No 5, Lions Eye Hospital Road (off JC Road)<br />
            Bangalore 560 002<br />
            Karnataka, India
          </p>
          <p className="mt-3 text-sm">
            <strong>PHONE :</strong> 080 2212 1253 / 55<br />
            <strong>FAX :</strong> 080 2223 2562<br />
            <strong>EMAIL :</strong><br />
            ebmanager@bwlioneyehospital.org<br />
            eyebank@bwlioneyehospital.org<br />
            lionseyebank@gmail.com
          </p>
          <p className="mt-3 text-sm">
            <strong>24x7 EMERGENCY :</strong> 97405 56666, 080 2223 5005
          </p>
        </div>
      </div>
</div>
      {/* Bottom Bar */}
      <div className=" border-t border-blue-700 p-2 text-center text-xs bg-black text-white">
        © 2020 Lions International Eye Bank | Developed By{" "}
        <a href="https://www.sunsys.in/" className="text-orange-400 hover:underline">
          Sunsys Technologies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
