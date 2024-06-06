import { colors } from "@/utils/theme/colors";
import { faBars, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomePricing = () => {
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28 bg-white"
      style={{
        backgroundImage: 'url("/svg/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">
            Pricing
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
            Flexible pricing plan for your startup
          </h3>
          <p className="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
            Pricing that scales with your business immediately.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-violet-500 font-medium">
                Basic Plan
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  10
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /mo
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-violet-500 font-medium">
                Freelancer Plan
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  99
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /mo
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  {/* <FontAwesomeIcon
                      className="mr-3"
                      icon={faCheckCircle}
                      color={colors.primary}
                      width={20}
                    /> */}
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-violet-500 font-medium">
                Enterprise Plan
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  799
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /year
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faCheckCircle}
                    color={colors.primary}
                    width={20}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
