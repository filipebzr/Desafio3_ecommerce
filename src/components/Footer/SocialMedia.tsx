import React from "react";

const  iconMap: Record<SocialMediaType, string> = {
  Facebook: "/socialMedia/facebook.svg",
  Instagram: "/socialMedia/instagram.svg",
  Twitter: "/socialMedia/twitter.svg",
  Linkedin: "/socialMedia/linkedin.svg",
};

interface SectionGaranteeProps {
  socialmedia: string;
  url: string;
}

const SocialMedia: React.FC<SectionGaranteeProps> = ({ socialmedia, url }) => {
  const icon = iconMap[socialmedia];
  return (
    <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white hover:text-gray-500">
      <a href={url}>
        {icon ? (
          <img src={icon} alt={socialmedia} />
        ) : (
          <span>Icon not found</span> 
        )}
      </a>
    </div>
  );
};

export default SocialMedia;
