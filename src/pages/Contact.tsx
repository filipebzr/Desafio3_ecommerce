import ContactCard from "../components/Contact/ContactCard";
import ContactForm from "../components/Contact/ContactForm";
import SectionGarantie from "../components/Section-Garantie/SectionGarantie";
import SectionTitle from "../components/Section-Title/SectionTitle";
import YellowButton from "../components/YellowButton";

const Contact = () => {
  return (
    <div className="pt-[60px]">
      <SectionTitle title="Contact" />
      <div className="h-[316px] w-full flex items-center justify-center flex-col">
        <h1 className="text-4xl p-4">Get In Touch With Us</h1>
        <p className="w-[644px] text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="w-full h-[923px] flex justify-center">
        <div className="flex flex-col items-center">
          <ContactCard
            icon=".\Contact\Vector.svg"
            title="Address"
            description="236 5th SE Avenue, New York NY10000, United States"
          />
          <ContactCard
            icon=".\Contact\Vector (1).svg"
            title="Address"
            description="236 5th SE Avenue, New York NY10000, United States"
          />
          <ContactCard
            icon=".\Contact\Vector (2).svg"
            title="Address"
            description="236 5th SE Avenue, New York NY10000, United States"
          />
        </div>
        <div className="flex flex-col h-[923px]">
          <ContactForm title="Your Name" placeholder="Abc" hidthForm="75" />
          <ContactForm title="Email address" placeholder="a@a.com" hidthForm="75" />
          <ContactForm title="Subject" placeholder="This is an optional" hidthForm="75" />
          <ContactForm
            title="Message"
            placeholder="Hi! i’d like to ask about"
            hidthForm="120"
          />
          <YellowButton title="Submit" />
        </div>
      </div>
      <SectionGarantie />
    </div>
  );
};

export default Contact;
