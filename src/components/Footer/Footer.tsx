import CheckedIcon from "./CheckedIcon";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const { email, isValid, message, validateEmail, handleSubscribe } =
    useEmailValidation();

  return (
    <div className="bg-white w-full flex items-center gap-[200px] px-[100px] py-[38px]">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Furniro.</h1>
          <p className="w-[285px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="flex gap-4 ">
          <SocialMedia socialmedia="Facebook" url="https://www.facebook.com/" />
          <SocialMedia socialmedia="Instagram" url="https://www.instagram.com/" />
          <SocialMedia socialmedia="Twitter" url="https://www.x.com/" />
          <SocialMedia socialmedia="Linkedin" url="https://www.linkedin.com/" />
        </div>

        <p className="mt-8">2023 furniro. All rights reserved</p>
      </div>

      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Links</h2>
          <nav className="flex flex-col gap-6 items-start">
            <a href="/" className="hover:text-gray-700">
              Home
            </a>
            <a href="/shop" className="hover:text-gray-700">
              Shop
            </a>
            <a href="/about" className="hover:text-gray-700">
              About
            </a>
            <a href="/contact" className="hover:text-gray-700">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Help</h2>
          <div className="flex flex-col gap-6">
            <a href="/payment" className="hover:text-gray-500">
              Payment Options
            </a>
            <a href="/returns" className="hover:text-gray-500">
              Returns
            </a>
            <a href="/privacy" className="hover:text-gray-500">
              Privacy Policies
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Newsletter</h2>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className={`border-b p-2 w-full pr-8 transition-all outline-none ${
                isValid ? "border-green-500" : "border-black"
              }`}
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
            />
            {isValid && (
              <div className="transform translate-y-1/3">
                <CheckedIcon />
              </div>
            )}
            <button
              onClick={handleSubscribe}
              className="border-b border-black text-black px-4 py-2 hover:text-gray-500"
            >
              SUBSCRIBE
            </button>
          </div>
          {message && <p className="mt-0 text-xs">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
