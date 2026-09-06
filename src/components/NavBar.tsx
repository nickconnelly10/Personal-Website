import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-medium text-gray-800">
          <Link href="/">Nicholas Connelly</Link>
        </div>

        <NavLinks variant="desktop" />
        <NavLinks variant="mobile" />
      </div>
    </nav>
  );
}
