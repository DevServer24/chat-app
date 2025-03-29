import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { AlignJustify,SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navbarList = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Sign Up", url: "/sign-up" },
    { name: "Sign In", url: "/sign-in" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6">
        {navbarList.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className="hover:text-gray-400">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
           
            <SquareMenu size={24}/>
          
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-lg">
            <ul className="space-y-2">
              {navbarList.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
