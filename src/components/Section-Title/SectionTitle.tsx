import logo from "/logo.svg";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="h-[316px] w-full flex flex-col justify-center bg-cover items-center bg-center bg-[url('/sectionTitle/bgImage.png')]">
      <img src={logo} alt="" className="h-[77px] w-[77px]" />
      <h1 className="text-5xl">{title}</h1>
      <div className="flex align-text-botton items-center justify-center mt-2 gap-2 text-xl">
        <a href="/" className="font-bold">Home</a>
        <p className="text-2xl font-bold">&gt;</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
