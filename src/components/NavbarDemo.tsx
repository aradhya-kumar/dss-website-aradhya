'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useActiveSection, scrollToSection } from "@/lib/use-active-section";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Board",
      link: "#board",
    },
    {
      name: "Events",
      link: "#events",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(["home", "about", "board", "events", "join"]);

  const handleMobileNavClick = (link: string) => {
    setIsMobileMenuOpen(false);
    if (link.startsWith("#")) {
      scrollToSection(link.replace("#", ""), 80);
    }
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection("join", 80);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo onClick={() => scrollToSection("home", 80)} />
          <NavItems items={navItems} activeSection={activeSection} />
          <div className="flex items-center gap-4">
            <NavbarButton
              href="#join"
              onClick={handleJoinClick}
              variant="primary"
              className="bg-white text-black hover:bg-neutral-200 transition-all font-semibold px-4 py-1.5 text-xs md:text-sm rounded-full"
            >
              Join Community
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo onClick={() => { setIsMobileMenuOpen(false); scrollToSection("home", 80); }} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            <div className="flex flex-col w-full space-y-3 pt-2">
              {navItems.map((item, idx) => {
                const isActive =
                  activeSection === item.link.replace("#", "") ||
                  (activeSection === "home" && item.link === "#home");
                return (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(item.link);
                    }}
                    className={`flex items-center justify-between w-full py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-white bg-white/10 font-semibold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="flex w-full flex-col gap-3 pt-3 border-t border-neutral-800">
              <NavbarButton
                onClick={handleJoinClick}
                variant="primary"
                className="w-full text-center py-2.5 rounded-xl font-bold bg-white text-black hover:bg-neutral-200 transition-all"
                href="#join"
              >
                Join Community
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
