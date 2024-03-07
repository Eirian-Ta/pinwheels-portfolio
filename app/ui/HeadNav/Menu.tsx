import Link from "next/link";

const links = [
  { name: "About", href: "/about", icon: "" },
  { name: "Projects", href: "/projects", icon: "" },
  { name: "Experience", href: "/experience", icon: "" },
  { name: "Contact", href: "/contact", icon: "" },
];

export default function Menu() {
  return (
    <div className="flex grow items-center justify-end gap-2 mx-5">
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
