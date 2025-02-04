interface SectionGaranteeProps {
    title: string;
    icon:string;
    paragrafy:string;
  }

const TagGarantie: React.FC<SectionGaranteeProps> = ({ title, icon, paragrafy }) => {
  return (
    <div className="flex flex-row items-center gap-4">
        <img src={icon} alt="" className="h-[60px] w-[60px]" />
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-gray-500">{paragrafy}</p>
        </div>
      </div>
  )
}

export default TagGarantie