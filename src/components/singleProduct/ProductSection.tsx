import SocialMedia from "../Footer/SocialMedia";
import ButtonColors from "../SectionProducts/ButtonColors";
import ButtonSizes from "../SectionProducts/ButtonSizes";

const thumbnail =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/thumbnail+Annibale+Colombo+Bed.png";
const img01 =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/1.png";
const img02 =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/2.png";
const img03 =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/3.png";

const ProductSection = () => {
  return (
    <div className="flex justify-center items-start bg-white   p-8">
      <div className="flex">
        {/* Image Gallery */}
        <div className="flex mr-8 gap-4">
          <div className="flex flex-col space-y-4">
            <img
              src={img01}
              alt="Thumb 1"
              className="w-[80px] h-[80px] rounded-lg bg-[#F9F1E7]"
            />
            <img
              src={img02}
              alt="Thumb 1"
              className="w-[80px] h-[80px] rounded-lg bg-[#F9F1E7]"
            />
            <img
              src={img03}
              alt="Thumb 1"
              className="w-[80px] h-[80px] rounded-lg bg-[#F9F1E7]"
            />
          </div>
          <img
            src={thumbnail}
            alt="Main"
            className="w-[500px] h-[500px] mb-4 rounded-lg bg-[#F9F1E7]"
          />
        </div>

        {/* Product Details */}
        <div className="max-w-lg  space-y-6">
          <h1 className="text-3xl font-bold">Asgaard sofa</h1>
          <p className="text-xl text-[#B88E2F]">Rs. 250,000.00</p>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-500">★★★★☆</div>
            <p className="ml-2 text-sm text-gray-600">5 Customer Review</p>
          </div>
          <p className="text-sm text-gray-700 my-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="my-4">
            <p className="font-bold">Size</p>
            <div className="flex space-x-2  ">
              <ButtonSizes text="XS" />
              <ButtonSizes text="L" />
              <ButtonSizes text="XL" />
            </div>
          </div>

          {/* Color Options */}
          <div className="my-4">
            <p className="font-bold">Color</p>
            <div className="flex space-x-2">
              <ButtonColors color="blue-200" />
              <ButtonColors color="black" />
              <ButtonColors color="[#B88E2F]" />
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center my-4">
            <div className="flex items-center border border-[#9F9F9F] h-[64px] w-[123px] justify-between rounded-xl px-2 py-1">
              <button>-</button>
              <input
                type="text"
                value="1"
                className="w-8 text-center"
                readOnly
              />
              <button>+</button>
            </div>
            <button className="ml-4 border border-black rounded-xl px-4 py-2 w-[215px] h-[64px]">
              Add To Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-12">
            <p className="text-sm text-gray-600">SKU: SS001</p>
            <p className="text-sm text-gray-600">Category: Sofas</p>
            <p className="text-sm text-gray-600">
              Tags: Sofa, Chair, Home, Shop
            </p>
            <div className="flex space-x-2 mt-2">
              <SocialMedia socialmedia="Facebook" url="" />
              <SocialMedia socialmedia="Linkedin" url="" />
              <SocialMedia socialmedia="Twitter" url="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
