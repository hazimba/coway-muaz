import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon, MenuIcon, Phone } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="animate-slide bg-background flex items-center h-16 p-2 border-b sticky top-0 z-20 mx-auto">
      <div className="mx-auto w-full max-w-6xl px-4 lg:px-0">
        <div className="flex h-8 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden lg:block">
              <HomeIcon className="h-5 w-5" />
            </Link>
            <Link href="/" className="">
              <Image
                className="w-auto h-14 object-contain"
                src="/coway-logo-2.jpg"
                alt="coway-logo"
                width={100}
                height={80}
              />
            </Link>
          </div>
          <ul className="hidden h-full gap-4 lg:flex lg:items-center">
            <Link href="#profile" className="text-sm">
              Profile
            </Link>
            <Link href="#product" className="text-sm">
              Product
            </Link>
            <Link href="#promotion" className="text-sm">
              Promotion
            </Link>
            <Link href="#contact" className="text-sm">
              Contact
            </Link>
          </ul>
          <Link
            href="https://wa.me/601140432883?text=Hello%20I%20am%20interested%20to%20know%20more%20about%20Coway%20products."
            className="hidden lg:block !p-10"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button className="w-24 !px-10" size="icon" variant="outline">
              <Phone className="" />
              Contact
            </Button>
          </Link>

          <div className="lg:hidden z-30">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Muaz Maarof</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#product">Product</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#promotion">Promotion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* <HamburgerMenu /> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
