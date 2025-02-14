import SectionTitle from "../Section-Title/SectionTitle";
import img from "../../assets/Imagem do WhatsApp de 2025-02-11 à(s) 14.14.39_8bba3ede.jpg";

const B = () => {
  return (
    <>
      <SectionTitle title="EU VOU SER PAI" />
      <div className="items-center justify-center flex">
        <img src={img} alt="" className="w-[400px] h-[400px] p-4" />
      </div>
    </>
  );
};

export default B;
