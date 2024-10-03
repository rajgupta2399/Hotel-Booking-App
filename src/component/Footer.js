import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { HOTEL_BOOKING_LOGO } from "../utils/Constant";

const BottomFooter = () => {
  return (
    <div>
      <Footer className="bg-[#2A323C] shadow-custom">
        <div className="w-full">
          <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-8 lg:px-24">
              <Footer.Title title="Company" className="flex justify-center" />
              <Footer.LinkGroup col>
                <div className="flex flex-col gap-3 ml-5">
                  <Link className="text-white font-semibold">About</Link>
                  <Link className="text-white font-semibold">Careers</Link>
                  <Link className="text-white font-semibold">Brand Center</Link>
                  <Link className="text-white font-semibold">Blog</Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className="px-8 lg:px-24">
              <Footer.Title
                title="Help Center"
                className="flex justify-center"
              />
              <Footer.LinkGroup col>
                <div className="flex flex-col gap-3 ml-5">
                  <Link className="text-white font-semibold">
                    Discord Server
                  </Link>
                  <Link className="text-white font-semibold">Twitter</Link>
                  <Link className="text-white font-semibold">Facebook</Link>
                  <Link className="text-white font-semibold">Contact Us</Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className="px-8 lg:px-24">
              <Footer.Title title="Legal" className="flex justify-center" />
              <Footer.LinkGroup col>
                <div className="flex flex-col gap-3 ml-5">
                  <Link className="text-white font-semibold">
                    Privacy Policy
                  </Link>
                  <Link className="text-white font-semibold">Licensing</Link>
                  <Link className="text-white font-semibold">
                    Terms & Conditions
                  </Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className="px-8 lg:px-24">
              <Footer.Title title="Download" className="flex justify-center" />
              <Footer.LinkGroup col>
                <div className="flex flex-col gap-3 ml-5">
                  <Link className="text-white font-semibold">iOS</Link>
                  <Link className="text-white font-semibold">Android</Link>
                  <Link className="text-white font-semibold">Windows</Link>
                  <Link className="text-white font-semibold">MacOS</Link>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3 items-center">
              <p className="py-1 text-white font-bold">&copy; 2024</p>
              <img src={HOTEL_BOOKING_LOGO} className="h-8 w-auto" alt="Logo" />
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default BottomFooter;
