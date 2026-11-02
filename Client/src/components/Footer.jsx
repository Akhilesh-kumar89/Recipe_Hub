
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2328] text-gray-300 mt-16 border-t border-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Recipe <span className="text-yellow-400">Hub</span>
            </h2>

            <p className="text-sm leading-6 text-gray-400">
              Discover delicious recipes, share your favorite food
              images and save recipes you love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/add" className="hover:text-yellow-400">
                  Add Recipe
                </a>
              </li>

              <li>
                <a href="/saved" className="hover:text-yellow-400">
                  Saved Recipes
                </a>
              </li>

              <li>
                <a href="/profile" className="hover:text-yellow-400">
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect With Us
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              Share your cooking ideas and enjoy delicious food!
            </p>

            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-yellow-400">
                Github
              </a>

              <a href="#" className="no-underline text-gray-300 hover:text-yellow-400 ">
                Linkdin
              </a>

              <a href="#" className="hover:text-yellow-400">
                Portfolio
              </a>
              
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Recipe Hub. All Rights Reserved.
          </p>

          <p className="text-sm mt-2">
            Made with ❤️ by
            <span className="text-yellow-400 font-semibold ml-1">
              Akhilesh
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
