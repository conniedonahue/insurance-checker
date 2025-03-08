import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex items-center space-x-4 text-lg">
          <Link
            href="/"
            className="text-2xl font-bold ml-20 mr-70 hover:opacity-80"
          >
            Melon Avenue
          </Link>
          <li>
            <Link href="/" className="hover:underline mr-5">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline mr-5">
              Check Availability
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline mr-5">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
