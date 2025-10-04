import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-3 py-8" id="contact">
      <div className="w-full max-w-7xl bg-white border border-gray-300 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Side - IELTS Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide">
            IELTS Preparation
          </h2>
          <p className="mb-8 text-lg leading-relaxed">
            Prepare for your IELTS exam with our expert-crafted resources, real test simulations, and personalized guidance.
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg font-medium">
            <li>✅ Expert guidance and coaching</li>
            <li>✅ Full-length practice tests with answers</li>
            <li>✅ Study plans tailored to your level</li>
            <li>✅ Speaking & writing tips from IELTS pros</li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
