import Link from "next/link";

const Navbar = () => {
  const pageConfig = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/List",
      title: "Articles",
    },
  ];
  return (
    <nav className="bg-[#6d8877] text-white p-4 fixed w-screen z-10">
      <ul className="flex space-x-4">
        {pageConfig.map((item) => (
          <li className="px-2">
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
