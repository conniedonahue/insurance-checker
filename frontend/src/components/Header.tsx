import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-10 text-white">
      <nav className="bg-orange-300 text-orange-50 p-4 container relative flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          Melon Ave
        </Link>
        <div className="mr-5 space-x-4 text-xl">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/eligibility" className="hover:underline">
            Check Eligibility
          </Link>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
