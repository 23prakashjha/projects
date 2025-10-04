import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <h3 className="text-2xl font-bold text-white">IELTSPro</h3>
            <p className="mt-4 text-sm text-gray-400">
              Helping you achieve your best IELTS score with expert guidance and tailored courses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About IELTSPro</a></li>
              <li><a href="#" className="hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Study Resources</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.91c0 .79-.64 1.43-1.43 1.43H1.43A1.43 1.43 0 010 19.47V4.56C0 3.77.64 3.13 1.43 3.13h21.14C23.36 3.13 24 3.77 24 4.56zM7.07 19.07h3.17V9.95H7.07v9.12zM8.65 8.72a1.83 1.83 0 110-3.66 1.83 1.83 0 010 3.66zM19.07 19.07h3.17v-4.41c0-2.23-1.19-3.27-2.77-3.27-1.28 0-1.87.73-2.2 1.27v-1.1h-3.17s.04.71 0 9.51h3.17v-5.3c0-.28.02-.55.1-.75.24-.55.79-1.12 1.71-1.12 1.21 0 1.7.85 1.7 2.1v5.08z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.95 4.57c-.89.39-1.84.65-2.83.77a4.92 4.92 0 002.16-2.71c-.95.56-2.01.96-3.13 1.18a4.92 4.92 0 00-8.38 4.49A13.97 13.97 0 011.67 3.15a4.9 4.9 0 001.52 6.57 4.93 4.93 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.95 4.95 0 01-2.22.08 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64a9.98 9.98 0 002.45-2.54z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="hover:text-white" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48a10.01 10.01 0 006.84-9.5c0-5.51-4.45-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} IELTSPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

