import Link from "next/link";

const links = [
  { name: "ABOUT", href: "/about", icon: "" },
  { name: "PROJECTS", href: "/projects", icon: "" },
  { name: "EXPERIENCE", href: "/experience", icon: "" },
  { name: "CONTACT", href: "/contact", icon: "" },
];

export default function Menu() {
  return (
    <div className="menu flex grow items-center justify-end gap-3 mx-5 font-bold">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
}
