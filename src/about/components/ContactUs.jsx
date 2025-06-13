import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-[#ffd400] mb-8 text-center relative pb-2">
        Get In Touch
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#ffd400]"></span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#ffd400] hover:bg-[#ffd400] text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-[#ffd400] text-white rounded-lg p-8 h-full">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                123 Fresh Street, Green Park, New Delhi, 110016
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-3" />
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3" />
                info@freshbasket.com
              </p>
              <p className="flex items-center">
                <FaClock className="mr-3" />
                Open 7 days a week, 6:00 AM - 10:00 PM
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center hover:bg-amber-500
                   transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
