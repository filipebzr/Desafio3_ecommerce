
import iconFacebook from "/socialMedia/facebook.svg";
import iconInstagram from "/socialMedia/instagram.svg";
import iconTwitter from "/socialMedia/twitter.svg";
import iconLinkedin from "/socialMedia/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-white w-full flex items-center justify-between px-[100px] py-[38px]">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Furniro.</h1>
          <p className="w-[285px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="flex gap-4 ">
          <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white hover:text-gray-500">
            <a href="http://www.facebook.com">
              <img src={iconFacebook} alt="" />
            </a>
          </div>
          <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white  hover:text-gray-500">
            <a href="http://www.instagram.com">
              <img src={iconInstagram} alt="" />
            </a>
          </div>
          <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white  hover:text-gray-500">
            <a href="http://www.x.com">
              <img src={iconTwitter} alt="" />
            </a>
          </div>
          <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white  hover:text-gray-500">
            <a href="http://www.linkedin.com" className=" hover:text-gray-500">
              <img src={iconLinkedin} alt="" />
            </a>
          </div>
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
              className=" border-b border-black p-2"
            />
            <button className="border-b border-black text-black px-4 py-2 hover:text-gray-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
