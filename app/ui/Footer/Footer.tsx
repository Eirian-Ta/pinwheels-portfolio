import React from "react";
import {
  DeviantArtIconLight,
  GitHubIconLight,
  LinkedInIconLight,
  MailIcon,
} from "../Icons";
// import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="footer flex flex-wrap justify-center items-center">
      <div className="m-3">
        <p>&copy; Developed by Eirian Ta. All Rights Reserved.</p>
      </div>
      <ul className={`flex`}>
        <li className="mx-1">
          <a
            href="https://github.com/Eirian-Ta"
            // href={userData.socialLinks.github}
          >
            <GitHubIconLight />
          </a>
        </li>
        <li className="mx-1">
          <a href="https://www.linkedin.com/in/eirian-ta/">
            <LinkedInIconLight />
          </a>
        </li>
        <li className="mx-1">
          <a href="https://www.deviantart.com/white-chan">
            <DeviantArtIconLight />
          </a>
        </li>
        <li className="mx-1">
          <a href="mailto:eirian.ta.tech@gmail.com">
            <MailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
