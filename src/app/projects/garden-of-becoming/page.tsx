import type { Metadata } from "next";
import { GardenOfBecomingCaseStudy } from "@/components/projects/GardenOfBecomingCaseStudy";
import { gardenOfBecomingMeta } from "@/data/garden-of-becoming";

export const metadata: Metadata = {
  title: `${gardenOfBecomingMeta.name} — Case Study`,
  description: gardenOfBecomingMeta.description,
  openGraph: {
    title: `${gardenOfBecomingMeta.name} — Case Study | Kene Okeke`,
    description: gardenOfBecomingMeta.description,
  },
};

export default function GardenOfBecomingCaseStudyPage() {
  return <GardenOfBecomingCaseStudy />;
}
