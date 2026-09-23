import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 160) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Check if at the very bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        const lastSection = sectionIds[sectionIds.length - 1];
        if (lastSection) {
          setActiveSection(lastSection);
          return;
        }
      }

      // Check from bottom to top to find the first section whose top <= scrollPosition
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop - 100) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Default to first section
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

export function scrollToSection(sectionId: string, offset: number = 80) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${sectionId}`);
    }
  }
}
