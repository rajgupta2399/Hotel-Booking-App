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
      <Footer className=" bg-[#2A323C] shadow-custom">
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div className=" px-24">
              <Footer.Title
                title="Company"
                className=" flex justify-center align-middle"
              />
              <Footer.LinkGroup col>
                <div className=" flex flex-col gap-3 ml-5">
                  <Link className=" text-white font-semibold text-decoration-none">
                    About
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Careers
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Brand Center
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Blog
                  </Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className="px-24">
              <Footer.Title
                title="help center"
                className=" flex justify-center align-middle"
              />
              <Footer.LinkGroup col>
                <div className=" flex flex-col gap-3 ml-5">
                  <Link className=" text-white font-semibold text-decoration-none">
                    Discord Server
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Twitter
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Facebook
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Contact Us
                  </Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className=" px-24">
              <Footer.Title
                title="legal"
                className=" flex justify-center align-middle"
              />
              <Footer.LinkGroup col>
                <div className=" flex flex-col gap-3 ml-5">
                  <Link className=" text-white font-semibold text-decoration-none">
                    Privacy Policy
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Licensing
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Terms &amp; Conditions
                  </Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div className=" px-24">
              <Footer.Title
                title="download"
                className=" flex justify-center align-middle"
              />
              <Footer.LinkGroup col>
                <div className=" flex flex-col gap-3 ml-5">
                  <Link className=" text-white font-semibold text-decoration-none">
                    iOS
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Android
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    Windows
                  </Link>
                  <Link className=" text-white font-semibold text-decoration-none">
                    MacOS
                  </Link>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-24 py-6 sm:flex sm:items-center sm:justify-between">
            <div className=" flex gap-3">
              <p className=" py-1 text-white font-bold"> &copy; 2024</p>
              <img src={HOTEL_BOOKING_LOGO} className=" h-9 w-auto" alt="" />
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
