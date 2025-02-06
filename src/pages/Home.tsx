// import ImageandTitle from "../components/Home/ImageandTitle";
import Carrousel from "../components/Home/Carrousel";
import ImageandTitle from "../components/Home/ImageandTitle";
import SectionShop from "../components/Shop/SectionShop";

const Home = () => {
  return (
    <>
      <div className="h-[720px] w-full flex flex-col items-end pr-[58px] justify-center bg-cover bg-center bg-[url('/sectionHome/bg-home.png')]">
        <div className="w-[643px] h-[443px] flex  bg-[#FFF3E3]">
          <div className="p-9 pt-[60px] flex flex-col gap-4">
            <p className="text-xl font-semibold">New Arrival</p>
            <h1 className="text-6xl font-bold text-[#B88E2F]">
              Discover Our New Collection
            </h1>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] h-[74px] w-[222px] font-bold text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-[100px] p-8 ">
        <h1 className="font-bold text-5xl">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex">
          <ImageandTitle
            title="Dining"
            url="https://bzr-furniro.s3.us-east-2.amazonaws.com/Shop/sec2-01.png"
          />
          <ImageandTitle
            title="Living"
            url="https://bzr-furniro.s3.us-east-2.amazonaws.com/Shop/sec2-02.png"
          />
          <ImageandTitle
            title="Bedroom"
            url="https://bzr-furniro.s3.us-east-2.amazonaws.com/Shop/sec2-03.png"
          />
        </div>
      </div>
      <section className="p-8">
        <SectionShop />
        <div className="h-[100px] items-center flex justify-center ">
          <button className="border-[#B88E2F] font-bold text-[#B88E2F] border h-[48px] w-[245px]">
            Show more
          </button>
        </div>
        <section className="w-full h-[670px]">
          <Carrousel />
        </section>
        <div className="w-full flex flex-col items-center justify-center pt-[100px]">
          <p className="font-bold text-[#616161]">Share your setup with</p>
          <h1 className="font-bold text-5xl ">#FuniroFurniture</h1>
          <img src="../sectionHome/mosaic.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
