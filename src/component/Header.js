import { useContext, useEffect, useState } from "react";
import "../App.css";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import ResponsiveAppBar from "./Avatar";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import CloseIcon from "@mui/icons-material/Close";
import { HOTEL_BOOKING_LOGO, options } from "../utils/Constant";
import { CountryCoordinates } from "../context/ContextApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const { country, setCountry } = useContext(CountryCoordinates);
  const { currentUser, logout } = useAuth(); // Authentication context

  const styleCard = {
    fontFamily: "Poppins",
  };

  const fetchCountryCode = async () => {
    const res = await fetch(
      "https://api.liteapi.travel/v3.0/data/countries?timeout=4",
      options
    );
    const data = await res.json();
    setCountryCode(data.data);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = countryCode.filter(
      (country) =>
        country.name.toLowerCase().includes(searchValue) ||
        country.code.toLowerCase().includes(searchValue)
    );

    setFilteredCountries(filtered);
  };

  const handleCountryName = (item) => {
    setSearchText(item);
    setSearchTerm("");
    setCountry({
      code: item.code,
      name: item.name,
    });
    setVisible(false);
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login"); // Redirect to login page after logout
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      {/** Sidebar */}
      <div
        className={`fixed inset-0 bg-[#1D232A] bg-opacity-5 backdrop-blur-sm z-[999] ${
          visible ? "" : "hidden"
        }`}
      >
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          className="sm:w-full w-[90%] md:w-[60%] lg:w-[37%] bg-[#1D232A]"
        >
          <div className=" px-10 flex justify-between align-items-center mt-2">
            <h6 className="my-2 text-white text-md font-semibold">
              Search Your Country For Booking
            </h6>
            <div>
              <button
                className="text-white text-xl"
                onClick={() => setVisible(false)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className=" px-10 pt-4 flex justify-center align-middle">
            <input
              type="email"
              placeholder="Search Your Country"
              className="w-full outline-none lg:w-[1/2] focus:outline-none text-black block placeholder-black h-10 rounded-md placeholder:text-center  "
              name="input"
              id="input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex justify-center align-middle my-5 mx-4">
            <ul className="max-h-[65vh] overflow-y-scroll scrollbar-hide">
              {filteredCountries.length > 0
                ? filteredCountries.map((item, index) => (
                    <div className="flex" key={index}>
                      <div>
                        <i className="fa-solid fa-location-dot mr-2 mt-[20px] text-white text-lg"></i>
                      </div>
                      <div>
                        <li
                          className="my-6 cursor-pointer hover:text-red-600 transition-all delay-100 text-white"
                          onClick={() => handleCountryName(item)}
                        >
                          {item.code}, {item.name}
                        </li>
                      </div>
                    </div>
                  ))
                : ""}
            </ul>
          </div>
        </Sidebar>
      </div>

      {/** Header */}

      <header className="bg-[#1D232A] font-Poppins w-full sm:px-10 md:px-10 lg:px-10 xl:px-24 2xl:px-32 shadow-xl text-white z-20 h-[80px]">
        <nav
          aria-label="Global"
          className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 text-white "
        >
          <div className="flex lg:flex-1 gap-5">
            <Link to={"/Dashboard"} className="-m-1.5 p-1.5">
              <img alt="" src={HOTEL_BOOKING_LOGO} className=" h-9 w-auto" />
            </Link>
            <div
              className="flex items-center gap-2 cursor-pointer py-1"
              onClick={() => setVisible(true)}
            >
              {searchText ? (
                <p className="font-bold border-b-2 dark:border-white dark:text-white hover:text-[#ED3237] transition-all delay-100 ease-in-out whitespace-nowrap w-[110px] overflow-hidden text-ellipsis text-center">
                  {country.name}
                </p>
              ) : (
                ""
              )}
              <i className="fa-solid fa-angle-down mb-2 text-lg dark:text-white"></i>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-20 text-white pb-3.5">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-0 text-white">
                <Link
                  to="/Dashboard"
                  className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
                  style={styleCard}
                >
                  <i class="fa-solid fa-house px-2 pb-1 no-underline"></i>
                  Dashboard
                </Link>
              </PopoverButton>
            </Popover>

            <Link
              to="/Wishlist"
              className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
              style={styleCard}
            >
              <i class="fa-solid fa-heart px-2 no-underline"></i>
              WishList
            </Link>
            <Link
              to="/MyBooking"
              className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
              style={styleCard}
            >
              <i class="fa-solid fa-bed px-2 no-underline"></i>
              MyBookings
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end pb-1">
            <a href="#" className="font-semibold leading-0 text-white">
              <ResponsiveAppBar />
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1D232A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={"/Dashboard"} className="-m-1.5 p-1.5">
                <img alt="" src={HOTEL_BOOKING_LOGO} className=" h-9 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3" style={styleCard}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7"
                          style={styleCard}
                        >
                          <Link
                            to="/Dashboard"
                            className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
                            style={styleCard}
                          >
                            <i class="fa-solid fa-house px-2 pb-1 no-underline"></i>
                            Dashboard
                          </Link>
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/Wishlist"
                      className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
                      style={styleCard}
                    >
                      <i class="fa-solid fa-heart px-2 no-underline"></i>
                      WishList
                    </Link>
                    <Link
                      to="/MyBooking"
                      className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
                      style={styleCard}
                    >
                      <i class="fa-solid fa-bed px-2 no-underline"></i>
                      My Bookings
                    </Link>

                    <Link
                      to="/Profile"
                      className="text-md font-semibold leading-0 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
                      style={styleCard}
                    >
                      <i class="fa-solid fa-user  px-2 no-underline"></i>
                      My Account
                    </Link>
                  </div>
                </div>
                <div className="py-6 text-white">
                  {currentUser ? (
                    // If user is logged in, show email and logout option
                    <div className="flex items-center space-x-4">
                      <span className="text-base font-semibold ">
                        Email: {currentUser.email}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    // If user is not logged in, show login link
                    <a
                      href="#"
                      onClick={() => navigate("/login")} // Redirect to login page
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    >
                      Log in
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
