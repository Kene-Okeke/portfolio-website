import type { Metadata } from "next";
import { ShopElevenCaseStudy } from "@/components/projects/ShopElevenCaseStudy";
import { shopElevenMeta } from "@/data/shop-eleven";

export const metadata: Metadata = {
  title: `${shopElevenMeta.name} — Case Study`,
  description: shopElevenMeta.description,
  openGraph: {
    title: `${shopElevenMeta.name} — Case Study | Kene Okeke`,
    description: shopElevenMeta.description,
  },
};

export default function ShopElevenCaseStudyPage() {
  return <ShopElevenCaseStudy />;
}
