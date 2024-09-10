"use client";

import Logo from "./logo";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

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
        <NavbarItem>
          <Link color="foreground" href="/">
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
          {session ? (
            <>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar showFallback isBordered as="button" className="transition-transform" color="secondary" name={session.user?.name as string} size="sm" src={session.user?.image as string} />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session.user?.name}</p>
                  </DropdownItem>
                  <DropdownItem key="pembelian">Pembelian</DropdownItem>
                  <DropdownItem key="kupon">Kupon</DropdownItem>
                  <DropdownItem key="pengaturan">Pengaturan</DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={() => signOut()} aria-label="Keluar">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          ) : (
            <Link href="/login" color="foreground">
              Log in
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="#" className="text-white" aria-label="Lihat brosur Kami" isDisabled>
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
