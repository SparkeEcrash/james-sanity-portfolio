import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="py-8 xsm:p-16">
      <div className="flex">
        <SocialIcon
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          url="https://www.github.com/jpark1219dev"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 100, width: 100 }}
        />
        <div>
          <SocialIcon
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            url="https://www.linkedin.com/in/james-park-16233467/"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 100, width: 100 }}
          />
        </div>
        <div>
          <SocialIcon
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            url="https://www.linkedin.com/in/james-park-16233467/"
            network="email"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 100, width: 100 }}
          />
        </div>
      </div>
			<div className="opacity-70 text-center">
				<p>©2023 James Park</p>
			</div>
    </div>
  );
}
