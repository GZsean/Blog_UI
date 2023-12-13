import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#6d8877] text-white p-4 fixed w-screen z-10">
      <ul className="flex space-x-4">
        <li className="px-2">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/list">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
