"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  useEffect(() => {
    // Handler to call on scroll
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`w-full border-none transition-colors duration-300 ${
        isAtTop
          ? "bg-gradient-to-b from-[#DCF1FF] to-[#EAF3FF] "
          : "bg-transparent"
      }`} // Apply bg color based on scroll// Full width navbar
      maxWidth="full" // Ensure Navbar spans full width
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Container to constrain max width */}
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
        <NavbarBrand>
          <p className="font-bold text-[#012E41 text-xl]">TripTap</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-orange-500" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#798791] hover:text-orange-500" href="#">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link
              className="text-[#798791] hover:text-orange-500"
            
            >
              Destination
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#798791] hover:text-orange-500" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <div className="bg-[#43B1AB] text-white px-4 py-2 rounded text-[14px]">
              Book Trip
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </div>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
