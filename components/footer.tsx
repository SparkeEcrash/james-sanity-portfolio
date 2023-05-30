import { SocialIcon } from "react-social-icons";
import { ISocial } from "../typings";

type FooterProps = {
  socials: ISocial[];
};

export default function Footer({ socials }: FooterProps) {
  return (
    <div className="py-8 xsm:p-16">
      <div className="flex justify-center">
        {socials.map((social, i) => {
          return (
            <SocialIcon
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              url={social.link}
              fgColor="white"
              bgColor="transparent"
              style={{ height: 100, width: 100 }}
              key={i}
            />
          );
        })}
        <SocialIcon
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          url="https://www.linkedin.com/in/james-park-16233467/"
          network="email"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 100, width: 100 }}
        />
      </div>
      <div className="opacity-70 text-center">
        <p>©2023 James Park</p>
      </div>
    </div>
  );
}
