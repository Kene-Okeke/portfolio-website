"use client";

import { useCallback, useEffect, useState } from "react";
import { Sidebar, MobileNav } from "@/components/dashboard/Sidebar";
import { Header, DashboardFooter } from "@/components/dashboard/Header";
import { OverviewSection } from "@/components/sections/Overview";
import { ProjectsSection } from "@/components/sections/Projects";
import { TechStackSection } from "@/components/sections/TechStack";
import { AboutSection } from "@/components/sections/About";
import { JourneySection } from "@/components/sections/Journey";
import { ContactSection, FooterLinks } from "@/components/sections/Contact";

export function HomePage() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleNavigate = useCallback((href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = [
      "overview",
      "projects",
      "stack",
      "about",
      "journey",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="lg:pl-56 xl:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-5 lg:px-6 md:py-10">
          <Header />
          <OverviewSection />
          <ProjectsSection />
          <TechStackSection />
          <AboutSection />
          <JourneySection />
          <ContactSection />
          <DashboardFooter />
          <FooterLinks />
        </div>
      </main>
    </div>
  );
}
