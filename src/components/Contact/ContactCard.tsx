interface ContactProps {
  title: string;
  description: string;
  icon: string;
}

const ContactCard: React.FC<ContactProps> = ({ icon, title, description }) => {
  return (
    <div className="w-[393px] h-[119px] flex gap-8 items-start">
      <img src={icon} alt="" />
      <div className="pt-8 w-[212px]">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
