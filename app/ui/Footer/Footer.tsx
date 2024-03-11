import React from "react";
import { allSocialContactLinks } from "@/app/lib/placeholder-data";

export default function Footer() {
  return (
    <div className="footer flex flex-wrap justify-center items-center">
      <div className="m-3">
        <p>&copy; Developed by Eirian Ta. All Rights Reserved.</p>
      </div>
      <ul className={`flex`}>
        {allSocialContactLinks.map((l) => (
          <li key={l.name} className="mx-1">
            <a href={l.url}>{l.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
