"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System", "Deployments", "My Settings", "Team Settings", "Help & Feedback", "Log Out"];

  return (
    <Navbar shouldHideOnScroll className="fixed">
      <NavbarContent className="border-b">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 border-b -mx-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/produk">
            Produk
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Layanan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/kepemimpinan">
            Tentang Kami
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/cleaner">
            Partner
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="border-b">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground">
            Log in
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="#" className="text-white">
            Lihat Booklet
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={index === 2 ? "success" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
