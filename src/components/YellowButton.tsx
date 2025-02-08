interface YellowButtonProps {
  title: string;
}

const YellowButton: React.FC<YellowButtonProps> = ({ title }) => {
  return (
    <>
      <button className="bg-[#B88E2F] h-[74px] w-[222px] font-bold text-white rounded">
        {title}
      </button>
    </>
  );
};

export default YellowButton;
