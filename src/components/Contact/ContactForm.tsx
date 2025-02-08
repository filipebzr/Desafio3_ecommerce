interface ContactFormProps {
  title: string;
  placeholder: string;
  hidthForm: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  placeholder,
  hidthForm,
}) => {
  return (
    <div className="pb-8">
      <h3 className="pb-4">{title}</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder={`${placeholder}`}
        className={`p-2 border rounded-md border-[#9F9F9F] w-[578px] h-[${hidthForm}px]`}
      />
    </div>
  );
};

export default ContactForm;
