import React from "react";
import WebsiteLogo from "../assets/image/Logo/Business Breath Logo.png";

function Footer() {
  return (
    <div className="container p-4 pt-32">
      {/* Main Footer Container */}
      <div className="container mx-auto flex flex-col md:flex-col items-center gap-16">
        {/* Top Container */}
        <div className="w-3/4 flex flex-col justify-center items-center gap-4">
          <h3 className="text-lg font-semibold mb-2 footer-newsletter ">
            Subscribe to Our Newsletter
          </h3>
          <div className="flex items-center space-x-4">
            <input
              className="border p-2 flex-grow newsletter-email"
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-blue-500 text-white p-2 newsletter-btn">Subscribe</button>
          </div>
          <p className="mt-2 text-sm text-center paragraph">
            By subscribing to our newsletter, you'll ensure that you stay
            well-informed and up-to-date with the most recent news and valuable
            insights. Our newsletter is your gateway to discovering the latest
            trends, developments, and breakthroughs in the fields that matter
            most to you. Don't miss out on the opportunity to gain a competitive
            edge and stay ahead in an ever-evolving world of information and
            innovation.
          </p>
        </div>

        {/* Bottom Container */}
        <div className="w-full flex flex-col justify-between">
          {/* Upper Bottom Container */}
          <div className="flex justify-between items-center mb-4 pb-6 border-b-2 border-black">
            <img src={WebsiteLogo} alt="Main Logo" />
            <ul className="flex space-x-4">
              <li className="paragraph">Featured Content</li>
              <li className="paragraph">Category 1</li>
              <li className="paragraph">Category 2</li>
              <li className="paragraph">Category 3</li>
            </ul>
          </div>

          {/* Lower Bottom Container */}
          <div className="flex justify-between items-center">
            <p className="text-sm paragraph">Copyrights@Digitack.io</p>
            <ul className="flex space-x-4">
              <li className="paragraph">Facebook</li>
              <li className="paragraph">Twitter</li>
              <li className="paragraph">Instagram</li>
              <li className="paragraph">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
