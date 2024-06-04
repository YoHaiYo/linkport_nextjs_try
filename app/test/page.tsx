// import Link from "next/link";
// import { headers } from "next/headers";
// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";
export default function Test() {
  return (
    <>
      <section className="bg-blueGray-50">
        <div className="container mx-auto overflow-hidden">
          <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <a href="#">
                    <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-16">
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Features</a>
                    </li>
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Solutions</a>
                    </li>
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Resources</a>
                    </li>
                    <li className="font-medium hover:text-gray-700">
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div className="w-auto hidden lg:block">
                  <div className="inline-block">
                    <button
                      className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Try 14 Days Free Trial
                    </button>
                  </div>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      className="navbar-burger text-indigo-600"
                      width={51}
                      height={51}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={56} height={56} rx={28} fill="currentColor" />
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a className="navbar-burger" href="#">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full">
                  <ul>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Features
                      </a>
                    </li>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Solutions
                      </a>
                    </li>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a className="font-medium hover:text-gray-700" href="#">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <div className="block">
                        <button
                          className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                          type="button"
                        >
                          Try 14 Days Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                  <div className="flex flex-wrap items-center -m-1">
                    <div className="w-auto p-1">
                      <a className="text-sm" href="">
                        👋 We are hiring! View open roles
                      </a>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
                  Discover mentors that helps you grow
                </h1>
                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                  Get the best-in-class group mentoring plans and professional
                  benefits for your team
                </p>
                <div className="flex flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Join Free for 30 Days
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                        type="button"
                      >
                        <div className="flex flex-wrap justify-center items-center -m-1">
                          <div className="w-auto p-1">
                            <svg
                              width={19}
                              height={18}
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="w-auto p-1">
                            <span>Book a call</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">
                  Trusted and loved by 100+ tech first teams
                </p>
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand.png" alt="" />
                  </div>
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand2.png" alt="" />
                  </div>
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                  src="flaro-assets/images/headers/header.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded">
                <div className="flex items-center mb-6">
                  <span className="flex-shrink-0 inline-flex justify-center items-center mr-3 w-10 h-10 rounded-full bg-purple-500">
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8335 2.58333H9.60014L9.33348 1.75C9.1606 1.26102 8.83993 0.837918 8.41589 0.539299C7.99185 0.24068 7.48544 0.0813322 6.96681 0.0833316H3.16681C2.50377 0.0833316 1.86788 0.346724 1.39904 0.815565C0.930201 1.28441 0.666809 1.92029 0.666809 2.58333V13.4167C0.666809 14.0797 0.930201 14.7156 1.39904 15.1844C1.86788 15.6533 2.50377 15.9167 3.16681 15.9167H14.8335C15.4965 15.9167 16.1324 15.6533 16.6012 15.1844C17.0701 14.7156 17.3335 14.0797 17.3335 13.4167V5.08333C17.3335 4.42029 17.0701 3.78441 16.6012 3.31557C16.1324 2.84672 15.4965 2.58333 14.8335 2.58333ZM15.6668 13.4167C15.6668 13.6377 15.579 13.8496 15.4227 14.0059C15.2665 14.1622 15.0545 14.25 14.8335 14.25H3.16681C2.9458 14.25 2.73383 14.1622 2.57755 14.0059C2.42127 13.8496 2.33348 13.6377 2.33348 13.4167V2.58333C2.33348 2.36232 2.42127 2.15036 2.57755 1.99408C2.73383 1.8378 2.9458 1.75 3.16681 1.75H6.96681C7.14151 1.74955 7.31194 1.80401 7.454 1.9057C7.59606 2.00739 7.70257 2.15115 7.75848 2.31667L8.20848 3.68333C8.26438 3.84885 8.37089 3.99261 8.51295 4.0943C8.65501 4.19598 8.82544 4.25045 9.00014 4.25H14.8335C15.0545 4.25 15.2665 4.3378 15.4227 4.49408C15.579 4.65036 15.6668 4.86232 15.6668 5.08333V13.4167Z"
                        fill="#E6D4F8"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold">
                      Example project name here dolor sit
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <span className="mr-3">
                      <svg
                        width={14}
                        height={18}
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6415 9.65834C10.5397 9.61785 10.431 9.5978 10.3215 9.59934C10.212 9.60088 10.1038 9.62397 10.0032 9.66731C9.90261 9.71064 9.81153 9.77337 9.73518 9.8519C9.65882 9.93043 9.59868 10.0232 9.55819 10.125C9.5177 10.2268 9.49765 10.3355 9.49919 10.4451C9.50073 10.5546 9.52382 10.6627 9.56716 10.7633C9.61049 10.8639 9.67321 10.955 9.75175 11.0314C9.83028 11.1077 9.92308 11.1678 10.0249 11.2083C11.2415 11.6917 11.9999 12.4417 11.9999 13.1667C11.9999 14.35 9.94986 15.6667 6.99986 15.6667C4.04986 15.6667 1.99986 14.35 1.99986 13.1667C1.99986 12.4417 2.75819 11.6917 3.97486 11.2083C4.1804 11.1266 4.34504 10.9665 4.43256 10.7633C4.52007 10.5602 4.5233 10.3305 4.44152 10.125C4.35975 9.91946 4.19967 9.75482 3.99651 9.66731C3.79334 9.57979 3.56373 9.57656 3.35819 9.65834C1.46652 10.4083 0.333191 11.7167 0.333191 13.1667C0.333191 15.5 3.25819 17.3333 6.99986 17.3333C10.7415 17.3333 13.6665 15.5 13.6665 13.1667C13.6665 11.7167 12.5332 10.4083 10.6415 9.65834ZM6.16652 7.21667V13.1667C6.16652 13.3877 6.25432 13.5996 6.4106 13.7559C6.56688 13.9122 6.77884 14 6.99986 14C7.22087 14 7.43283 13.9122 7.58911 13.7559C7.74539 13.5996 7.83319 13.3877 7.83319 13.1667V7.21667C8.61874 7.01384 9.30335 6.53148 9.75869 5.86C10.214 5.18852 10.4088 4.37402 10.3066 3.56917C10.2044 2.76433 9.81214 2.0244 9.20338 1.48807C8.59463 0.951747 7.81117 0.655853 6.99986 0.655853C6.18855 0.655853 5.40508 0.951747 4.79633 1.48807C4.18757 2.0244 3.79532 2.76433 3.69309 3.56917C3.59086 4.37402 3.78568 5.18852 4.24102 5.86C4.69637 6.53148 5.38097 7.01384 6.16652 7.21667ZM6.99986 2.33334C7.32949 2.33334 7.65172 2.43109 7.92581 2.61422C8.19989 2.79736 8.41351 3.05766 8.53966 3.3622C8.6658 3.66674 8.69881 4.00185 8.6345 4.32516C8.57019 4.64846 8.41146 4.94543 8.17837 5.17852C7.94528 5.41161 7.64831 5.57034 7.32501 5.63465C7.00171 5.69896 6.66659 5.66595 6.36205 5.53981C6.05751 5.41366 5.79721 5.20004 5.61407 4.92596C5.43094 4.65187 5.33319 4.32964 5.33319 4.00001C5.33319 3.55798 5.50879 3.13406 5.82135 2.82149C6.13391 2.50893 6.55783 2.33334 6.99986 2.33334Z"
                          fill="#C2C9D2"
                        />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-500">Warsaw, Poland</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="mr-3">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.833 3.41668H12.333V2.58334C12.333 1.9203 12.0696 1.28442 11.6008 0.815577C11.1319 0.346736 10.496 0.0833435 9.83299 0.0833435H8.16632C7.50328 0.0833435 6.86739 0.346736 6.39855 0.815577C5.92971 1.28442 5.66632 1.9203 5.66632 2.58334V3.41668H3.16632C2.50328 3.41668 1.86739 3.68007 1.39855 4.14891C0.929713 4.61775 0.666321 5.25363 0.666321 5.91668V13.4167C0.666321 14.0797 0.929713 14.7156 1.39855 15.1844C1.86739 15.6533 2.50328 15.9167 3.16632 15.9167H14.833C15.496 15.9167 16.1319 15.6533 16.6008 15.1844C17.0696 14.7156 17.333 14.0797 17.333 13.4167V5.91668C17.333 5.25363 17.0696 4.61775 16.6008 4.14891C16.1319 3.68007 15.496 3.41668 14.833 3.41668ZM7.33299 2.58334C7.33299 2.36233 7.42079 2.15037 7.57707 1.99409C7.73335 1.83781 7.94531 1.75001 8.16632 1.75001H9.83299C10.054 1.75001 10.266 1.83781 10.4222 1.99409C10.5785 2.15037 10.6663 2.36233 10.6663 2.58334V3.41668H7.33299V2.58334ZM15.6663 13.4167C15.6663 13.6377 15.5785 13.8497 15.4222 14.0059C15.266 14.1622 15.054 14.25 14.833 14.25H3.16632C2.94531 14.25 2.73335 14.1622 2.57707 14.0059C2.42079 13.8497 2.33299 13.6377 2.33299 13.4167V9.20834H4.83299V10.0833C4.83299 10.3044 4.92079 10.5163 5.07707 10.6726C5.23335 10.8289 5.44531 10.9167 5.66632 10.9167C5.88733 10.9167 6.0993 10.8289 6.25558 10.6726C6.41186 10.5163 6.49965 10.3044 6.49965 10.0833V9.20834H11.4997V10.0833C11.4997 10.3044 11.5875 10.5163 11.7437 10.6726C11.9 10.8289 12.112 10.9167 12.333 10.9167C12.554 10.9167 12.766 10.8289 12.9222 10.6726C13.0785 10.5163 13.1663 10.3044 13.1663 10.0833V9.20834H15.6663V13.4167ZM15.6663 7.58334H2.33299V5.91668C2.33299 5.69566 2.42079 5.4837 2.57707 5.32742C2.73335 5.17114 2.94531 5.08334 3.16632 5.08334H14.833C15.054 5.08334 15.266 5.17114 15.4222 5.32742C15.5785 5.4837 15.6663 5.69566 15.6663 5.91668V7.58334Z"
                          fill="#C2C9D2"
                        />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-500">Shuffle.dev</span>
                  </div>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                      />
                      <img
                        className="w-8 h-8 -ml-2 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                      />
                      <img
                        className="w-8 h-8 -ml-2 rounded-full object-cover object-top"
                        src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                      <div className="inline-flex -ml-2 items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                        +3
                      </div>
                    </div>
                    <a href="#">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00001 6.66666C7.26363 6.66666 6.66668 7.26362 6.66668 8C6.66668 8.73637 7.26363 9.33333 8.00001 9.33333C8.73639 9.33333 9.33334 8.73637 9.33334 7.99999C9.33334 7.26362 8.73639 6.66666 8.00001 6.66666Z"
                          fill="#E1E4E8"
                        />
                        <path
                          d="M12.6667 6.66666C11.9303 6.66666 11.3333 7.26362 11.3333 8C11.3333 8.73637 11.9303 9.33333 12.6667 9.33333C13.403 9.33333 14 8.73637 14 7.99999C14 7.26362 13.403 6.66666 12.6667 6.66666Z"
                          fill="#E1E4E8"
                        />
                        <path
                          d="M3.33332 6.66666C2.59694 6.66666 1.99999 7.26362 1.99999 8C1.99999 8.73637 2.59694 9.33333 3.33332 9.33333C4.0697 9.33333 4.66666 8.73637 4.66666 7.99999C4.66666 7.26362 4.0697 6.66666 3.33332 6.66666Z"
                          fill="#E1E4E8"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="relative w-full h-1 mb-3 rounded-full bg-gray-50">
                    <div className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-purple-500" />
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block py-1 px-2 mr-2 bg-indigo-50 rounded-full text-xs text-indigo-500">
                      Phase 2
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Implementation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded">
                <div className="flex items-center mb-6">
                  <span className="flex-shrink-0 inline-flex justify-center items-center mr-3 w-10 h-10 rounded-full bg-orange-500">
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8335 2.58333H9.60016L9.33349 1.75C9.16062 1.26102 8.83995 0.837918 8.41591 0.539299C7.99187 0.24068 7.48546 0.0813322 6.96683 0.0833316H3.16682C2.50378 0.0833316 1.8679 0.346724 1.39906 0.815565C0.930217 1.28441 0.666824 1.92029 0.666824 2.58333V13.4167C0.666824 14.0797 0.930217 14.7156 1.39906 15.1844C1.8679 15.6533 2.50378 15.9167 3.16682 15.9167H14.8335C15.4965 15.9167 16.1324 15.6533 16.6013 15.1844C17.0701 14.7156 17.3335 14.0797 17.3335 13.4167V5.08333C17.3335 4.42029 17.0701 3.78441 16.6013 3.31557C16.1324 2.84672 15.4965 2.58333 14.8335 2.58333ZM15.6668 13.4167C15.6668 13.6377 15.579 13.8496 15.4227 14.0059C15.2665 14.1622 15.0545 14.25 14.8335 14.25H3.16682C2.94581 14.25 2.73385 14.1622 2.57757 14.0059C2.42129 13.8496 2.33349 13.6377 2.33349 13.4167V2.58333C2.33349 2.36232 2.42129 2.15036 2.57757 1.99408C2.73385 1.8378 2.94581 1.75 3.16682 1.75H6.96683C7.14153 1.74955 7.31195 1.80401 7.45402 1.9057C7.59608 2.00739 7.70259 2.15115 7.75849 2.31667L8.20849 3.68333C8.2644 3.84885 8.37091 3.99261 8.51297 4.0943C8.65503 4.19598 8.82545 4.25045 9.00016 4.25H14.8335C15.0545 4.25 15.2665 4.3378 15.4227 4.49408C15.579 4.65036 15.6668 4.86232 15.6668 5.08333V13.4167Z"
                        fill="#FDE4D4"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold">
                      Example project name here dolor sit
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <span className="mr-3">
                      <svg
                        width={14}
                        height={18}
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6415 9.65834C10.5397 9.61785 10.431 9.5978 10.3215 9.59934C10.212 9.60088 10.1038 9.62397 10.0032 9.66731C9.90261 9.71064 9.81153 9.77337 9.73518 9.8519C9.65882 9.93043 9.59868 10.0232 9.55819 10.125C9.5177 10.2268 9.49765 10.3355 9.49919 10.4451C9.50073 10.5546 9.52382 10.6627 9.56716 10.7633C9.61049 10.8639 9.67321 10.955 9.75175 11.0314C9.83028 11.1077 9.92308 11.1678 10.0249 11.2083C11.2415 11.6917 11.9999 12.4417 11.9999 13.1667C11.9999 14.35 9.94986 15.6667 6.99986 15.6667C4.04986 15.6667 1.99986 14.35 1.99986 13.1667C1.99986 12.4417 2.75819 11.6917 3.97486 11.2083C4.1804 11.1266 4.34504 10.9665 4.43256 10.7633C4.52007 10.5602 4.5233 10.3305 4.44152 10.125C4.35975 9.91946 4.19967 9.75482 3.99651 9.66731C3.79334 9.57979 3.56373 9.57656 3.35819 9.65834C1.46652 10.4083 0.333191 11.7167 0.333191 13.1667C0.333191 15.5 3.25819 17.3333 6.99986 17.3333C10.7415 17.3333 13.6665 15.5 13.6665 13.1667C13.6665 11.7167 12.5332 10.4083 10.6415 9.65834ZM6.16652 7.21667V13.1667C6.16652 13.3877 6.25432 13.5996 6.4106 13.7559C6.56688 13.9122 6.77884 14 6.99986 14C7.22087 14 7.43283 13.9122 7.58911 13.7559C7.74539 13.5996 7.83319 13.3877 7.83319 13.1667V7.21667C8.61874 7.01384 9.30335 6.53148 9.75869 5.86C10.214 5.18852 10.4088 4.37402 10.3066 3.56917C10.2044 2.76433 9.81214 2.0244 9.20338 1.48807C8.59463 0.951747 7.81117 0.655853 6.99986 0.655853C6.18855 0.655853 5.40508 0.951747 4.79633 1.48807C4.18757 2.0244 3.79532 2.76433 3.69309 3.56917C3.59086 4.37402 3.78568 5.18852 4.24102 5.86C4.69637 6.53148 5.38097 7.01384 6.16652 7.21667ZM6.99986 2.33334C7.32949 2.33334 7.65172 2.43109 7.92581 2.61422C8.19989 2.79736 8.41351 3.05766 8.53966 3.3622C8.6658 3.66674 8.69881 4.00185 8.6345 4.32516C8.57019 4.64846 8.41146 4.94543 8.17837 5.17852C7.94528 5.41161 7.64831 5.57034 7.32501 5.63465C7.00171 5.69896 6.66659 5.66595 6.36205 5.53981C6.05751 5.41366 5.79721 5.20004 5.61407 4.92596C5.43094 4.65187 5.33319 4.32964 5.33319 4.00001C5.33319 3.55798 5.50879 3.13406 5.82135 2.82149C6.13391 2.50893 6.55783 2.33334 6.99986 2.33334Z"
                          fill="#C2C9D2"
                        />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-500">Warsaw, Poland</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="mr-3">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.833 3.41668H12.333V2.58334C12.333 1.9203 12.0696 1.28442 11.6008 0.815577C11.1319 0.346736 10.496 0.0833435 9.83299 0.0833435H8.16632C7.50328 0.0833435 6.86739 0.346736 6.39855 0.815577C5.92971 1.28442 5.66632 1.9203 5.66632 2.58334V3.41668H3.16632C2.50328 3.41668 1.86739 3.68007 1.39855 4.14891C0.929713 4.61775 0.666321 5.25363 0.666321 5.91668V13.4167C0.666321 14.0797 0.929713 14.7156 1.39855 15.1844C1.86739 15.6533 2.50328 15.9167 3.16632 15.9167H14.833C15.496 15.9167 16.1319 15.6533 16.6008 15.1844C17.0696 14.7156 17.333 14.0797 17.333 13.4167V5.91668C17.333 5.25363 17.0696 4.61775 16.6008 4.14891C16.1319 3.68007 15.496 3.41668 14.833 3.41668ZM7.33299 2.58334C7.33299 2.36233 7.42079 2.15037 7.57707 1.99409C7.73335 1.83781 7.94531 1.75001 8.16632 1.75001H9.83299C10.054 1.75001 10.266 1.83781 10.4222 1.99409C10.5785 2.15037 10.6663 2.36233 10.6663 2.58334V3.41668H7.33299V2.58334ZM15.6663 13.4167C15.6663 13.6377 15.5785 13.8497 15.4222 14.0059C15.266 14.1622 15.054 14.25 14.833 14.25H3.16632C2.94531 14.25 2.73335 14.1622 2.57707 14.0059C2.42079 13.8497 2.33299 13.6377 2.33299 13.4167V9.20834H4.83299V10.0833C4.83299 10.3044 4.92079 10.5163 5.07707 10.6726C5.23335 10.8289 5.44531 10.9167 5.66632 10.9167C5.88733 10.9167 6.0993 10.8289 6.25558 10.6726C6.41186 10.5163 6.49965 10.3044 6.49965 10.0833V9.20834H11.4997V10.0833C11.4997 10.3044 11.5875 10.5163 11.7437 10.6726C11.9 10.8289 12.112 10.9167 12.333 10.9167C12.554 10.9167 12.766 10.8289 12.9222 10.6726C13.0785 10.5163 13.1663 10.3044 13.1663 10.0833V9.20834H15.6663V13.4167ZM15.6663 7.58334H2.33299V5.91668C2.33299 5.69566 2.42079 5.4837 2.57707 5.32742C2.73335 5.17114 2.94531 5.08334 3.16632 5.08334H14.833C15.054 5.08334 15.266 5.17114 15.4222 5.32742C15.5785 5.4837 15.6663 5.69566 15.6663 5.91668V7.58334Z"
                          fill="#C2C9D2"
                        />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-500">Shuffle.dev</span>
                  </div>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                      />
                      <img
                        className="w-8 h-8 -ml-2 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                      />
                      <img
                        className="w-8 h-8 -ml-2 rounded-full object-cover object-top"
                        src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                      <div className="inline-flex -ml-2 items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                        +3
                      </div>
                    </div>
                    <a href="#">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00001 6.66666C7.26363 6.66666 6.66668 7.26362 6.66668 8C6.66668 8.73637 7.26363 9.33333 8.00001 9.33333C8.73639 9.33333 9.33334 8.73637 9.33334 7.99999C9.33334 7.26362 8.73639 6.66666 8.00001 6.66666Z"
                          fill="#E1E4E8"
                        />
                        <path
                          d="M12.6667 6.66666C11.9303 6.66666 11.3333 7.26362 11.3333 8C11.3333 8.73637 11.9303 9.33333 12.6667 9.33333C13.403 9.33333 14 8.73637 14 7.99999C14 7.26362 13.403 6.66666 12.6667 6.66666Z"
                          fill="#E1E4E8"
                        />
                        <path
                          d="M3.33332 6.66666C2.59694 6.66666 1.99999 7.26362 1.99999 8C1.99999 8.73637 2.59694 9.33333 3.33332 9.33333C4.0697 9.33333 4.66666 8.73637 4.66666 7.99999C4.66666 7.26362 4.0697 6.66666 3.33332 6.66666Z"
                          fill="#E1E4E8"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="relative w-full h-1 mb-3 rounded-full bg-gray-50">
                    <div className="absolute top-0 left-0 h-full w-1/6 rounded-full bg-orange-500" />
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block py-1 px-2 mr-2 bg-indigo-50 rounded-full text-xs text-indigo-500">
                      Phase 1
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Getting started
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-medium bg-white py-24 2xl:py-44">
        <div className="container px-4 mx-auto">
          <h2 className="font-heading text-9xl md:text-10xl xl:text-11xl leading-tight mb-10">
            Plans
          </h2>
          <p className="text-lg leading-6 font-normal text-darkBlueGray-400 mb-20 lg:mb-36">
            Sed porttitor turpis sit amet malesuada porta. Vivamus lobortis blandit
            lorem ut posuere.
          </p>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 border border-gray-100 rounded-5xl overflow-hidden">
            <div className="py-16 px-6 md:px-10 flex flex-col justify-between md:border-b border-gray-100 xl:border-b-0">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="mr-2 font-heading text-6xl md:text-7xl leading-10 tracking-tight">
                    Beginner
                  </h3>
                  <div className="relative max-w-max">
                    <img
                      className="w-14 h-14"
                      src="uinel-assets/elements/pricing/circle1.svg"
                      alt=""
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-6xl">
                      X
                    </span>
                  </div>
                </div>
                <div className="font-heading text-3xl flex items-center mb-14">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>8.80</span>
                </div>
                <h3 className="font-heading text-base tracking-tighter leading-5 mb-6">
                  What's included
                </h3>
                <ul className="mb-14 xl:mb-36">
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>Complete tools</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>10GB cloud storage</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>5 team members</span>
                  </li>
                </ul>
              </div>
              <a
                className="block py-3 px-10 md:mx-auto w-full md:w-auto text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Get started
              </a>
            </div>
            <div className="bg-gray-50 py-16 px-6 md:px-10 flex flex-col justify-between md:border-b border-gray-100 xl:border-b-0">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-heading text-6xl md:text-7xl leading-10 tracking-tight">
                    Students
                  </h3>
                  <div className="relative max-w-max">
                    <img
                      className="w-14 h-14"
                      src="uinel-assets/elements/pricing/circle2.svg"
                      alt=""
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-6xl">
                      I
                    </span>
                  </div>
                </div>
                <div className="mb-14 flex items-center justify-between">
                  <div className="font-heading text-3xl flex items-center">
                    <span className="text-base mr-2 -mb-1">$</span>
                    <span>15.90</span>
                  </div>
                  <div className="bg-white rounded-8xl py-2 px-3 uppercase text-xs font-bold tracking-wider text-gray-300">
                    20% off
                  </div>
                </div>
                <h3 className="font-heading text-base tracking-tighter leading-5 mb-6">
                  What's included
                </h3>
                <ul className="mb-14 xl:mb-36">
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>Complete tools</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>10GB cloud storage</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>Unlimited anonymous board editors</span>
                  </li>
                </ul>
              </div>
              <a
                className="block py-3 px-10 md:mx-auto w-full md:w-auto text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Let's go
              </a>
            </div>
            <div className="py-16 px-6 md:px-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-heading text-6xl md:text-7xl leading-10 tracking-tight">
                    Team
                  </h3>
                  <div className="relative max-w-max">
                    <img
                      className="w-14 h-14"
                      src="uinel-assets/elements/pricing/circle3.svg"
                      alt=""
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-6xl">
                      Y
                    </span>
                  </div>
                </div>
                <div className="font-heading text-3xl flex items-center mb-14">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>29.90</span>
                </div>
                <h3 className="font-heading text-base tracking-tighter leading-5 mb-6">
                  What's included
                </h3>
                <ul className="mb-14 xl:mb-36">
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>Complete tools</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>35 plugins for Designers</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>200GB cloud storage</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>100+ team members</span>
                  </li>
                </ul>
              </div>
              <a
                className="block py-3 px-10 md:mx-auto w-full md:w-auto text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Buy now
              </a>
            </div>
            <div className="bg-gray-50 py-16 px-6 md:px-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-heading text-6xl md:text-7xl leading-10 tracking-tight">
                    Business
                  </h3>
                  <div className="relative max-w-max">
                    <img
                      className="w-14 h-14"
                      src="uinel-assets/elements/pricing/circle4.svg"
                      alt=""
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-6xl">
                      O
                    </span>
                  </div>
                </div>
                <div className="font-heading text-3xl flex items-center mb-14">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>44.90</span>
                </div>
                <h3 className="font-heading text-base tracking-tighter leading-5 mb-6">
                  What's included
                </h3>
                <ul className="mb-14 xl:mb-36">
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>Complete tools</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>35 plugins for Designers</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400 mb-3">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>500GB cloud storage</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-darkBlueGray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src="uinel-assets/elements/pricing/checked.svg"
                      alt=""
                    />
                    <span>200+ team members</span>
                  </li>
                </ul>
              </div>
              <a
                className="block py-3 px-10 md:mx-auto w-full md:w-auto text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 2xl:pt-40 2xl:pb-52 bg-white">
        <div className="container px-6 mx-auto">
          <div className="mb-20 2xl:mb-36 text-center">
            <span className="block mb-9 text-xs leading-4 font-medium uppercase tracking-widest text-gray-300">
              How it works
            </span>
            <h2 className="text-9xl md:text-10xl xl:text-11xl leading-none font-heading font-medium">
              Easy to use
            </h2>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center -mx-4 mb-20 md:mb-32 2xl:mb-56">
            <a className="w-auto px-4 order-last md:order-first" href="#">
              <svg
                width={8}
                height={12}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21015 10.4594C7.59662 10.8128 7.59662 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.096617 6.28579 -0.096617 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880363 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
                  fill="black"
                />
              </svg>
            </a>
            <div className="w-full md:w-11/12 px-4 mb-12 md:mb-0">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <h2 className="mb-14 text-7xl lg:text-8xl leading-tight font-medium font-heading">
                        Choose application
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        The nulla commodo, commodo eros a, tristique lectus.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto xl:mt-10 mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <h2 className="mb-14 text-7xl lg:text-8xl leading-tight font-medium font-heading">
                        Feel free, take all
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        Proin nec nunc felis. In non tellus ultricies, rutrum lacus
                        et, pharetra elit.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <h2 className="mb-14 text-7xl lg:text-8xl leading-tight font-medium font-heading">
                        Download app
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
            <a className="w-auto px-4 order-last" href="#">
              <svg
                width={8}
                height={12}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.289848 1.54064C-0.0966159 1.18719 -0.0966159 0.615929 0.289848 0.265087C0.676312 -0.0870581 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.096616 11.3824 -0.096616 10.8112 0.289848 10.4603L4.81927 5.99853L0.289848 1.54064Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div className="flex w-44 h-1 mx-auto bg-blue-200">
            <a className="w-1/2 bg-indigo-500" href="#" />
            <a className="w-1/2 bg-transparent" href="#" />
          </div>
        </div>
      </section>



    </>
  );
}