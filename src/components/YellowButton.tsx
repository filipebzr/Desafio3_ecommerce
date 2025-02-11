interface YellowButtonProps {
  title: string;
  path: string
}

const YellowButton: React.FC<YellowButtonProps> = ({ title, path }) => {
  return (
    <>
    <a href={path}>
      <button className="bg-[#B88E2F] h-[74px] w-[222px] font-bold text-white rounded">
        {title}
      </button>
    </a>
    </>
  );
};

export default YellowButton;
