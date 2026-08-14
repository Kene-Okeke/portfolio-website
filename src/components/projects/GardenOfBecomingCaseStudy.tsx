"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CreditCard,
  Download,
  Headphones,
  Layers,
  Mail,
  ShieldCheck,
  Sparkles,
  UserCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import {
  gardenOfBecomingFeatures,
  gardenOfBecomingFulfillmentFlow,
  gardenOfBecomingImpactMetrics,
  gardenOfBecomingMeta,
  gardenOfBecomingStackLayers,
} from "@/data/garden-of-becoming";
import { cn } from "@/lib/utils";

const featureIcons = [
  CreditCard,
  Headphones,
  Mail,
  Download,
  UserCircle,
  Zap,
];

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn("mb-12 md:mb-16 last:mb-0", className)}
    >
      {children}
    </motion.section>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-panel/80 p-4 backdrop-blur-sm">
      <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-1.5">
        {label}
      </p>
      <p className="text-sm text-foreground leading-snug">{value}</p>
    </div>
  );
}

function KpiCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-panel p-6 md:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top right, var(--color-accent, #22d3ee), transparent 60%)",
        }}
      />

      <p className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {value}
      </p>

      <p className="relative mt-2 text-xs font-semibold tracking-[0.15em] text-accent uppercase">
        {label}
      </p>

      <p className="relative mt-2 text-sm text-muted leading-relaxed">
        {detail}
      </p>
    </div>
  );
}

export function GardenOfBecomingCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          Back to Projects
        </Link>

        {/* Hero */}
        <Section>
          <div className="rounded-xl border border-border bg-panel/90 overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase mb-4">
                Case Study
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {gardenOfBecomingMeta.name}
              </h1>

              <p className="mt-2 text-sm md:text-base font-medium tracking-wide text-muted uppercase">
                {gardenOfBecomingMeta.tagline}
              </p>

              <p className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
                {gardenOfBecomingMeta.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <MetaCard
                  label="Role"
                  value={gardenOfBecomingMeta.role}
                />

                <MetaCard
                  label="Stack"
                  value={gardenOfBecomingMeta.stack}
                />

                <MetaCard
                  label="Status"
                  value={gardenOfBecomingMeta.status}
                />

                <MetaCard
                  label="Category"
                  value={gardenOfBecomingMeta.category}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Impact */}
        <Section>
          <CardHeader title="Impact at a Glance" />

          <div className="grid gap-4 md:grid-cols-3">
            {gardenOfBecomingImpactMetrics.map((metric) => (
              <KpiCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                detail={metric.detail}
              />
            ))}
          </div>
        </Section>

        {/* Problem */}
        <Section>
          <Card>
            <CardHeader title="The Problem" />

            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  The Garden of Becoming needed a reliable digital commerce
                  system for selling e-books and audiobooks directly to
                  customers.
                </p>

                <p>
                  The platform needed to support secure payments, protected
                  digital assets, audiobook previews, customer accounts, and
                  automated fulfillment without requiring manual intervention
                  after every purchase.
                </p>
              </div>

              <div className="rounded-lg border border-dashed border-border bg-background p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-2">
                  Requirement Focus
                </p>

                <ul className="space-y-2 text-sm text-muted" role="list">
                  <li>Secure online payments</li>
                  <li>Automated digital delivery</li>
                  <li>Audiobook previews</li>
                  <li>Protected digital downloads</li>
                  <li>Customer purchase management</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        {/* Solution */}
        <Section>
          <Card>
            <CardHeader title="The Solution" />

            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                I built the solution on WordPress and WooCommerce, extending
                the platform with Stripe payment processing, custom JavaScript
                functionality, digital product configuration, and automated
                fulfillment workflows.
              </p>

              <p>
                One of the key custom pieces was the audiobook preview
                experience, allowing customers to sample audio before
                purchasing. The platform also uses WooCommerce&apos;s digital
                product functionality to manage protected downloads and
                automated customer delivery.
              </p>

              <p>
                Developed as part of my work at{" "}
                <span className="text-foreground">
                  MC Tech Web Agency
                </span>
                , the implementation focused on reducing operational overhead
                while giving customers a complete self-service purchasing
                experience.
              </p>
            </div>
          </Card>
        </Section>

        {/* Key Features */}
        <Section>
          <CardHeader title="Key Features" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gardenOfBecomingFeatures.map((feature, index) => {
              const Icon = featureIcons[index] ?? Sparkles;

              return (
                <Card
                  key={feature.title}
                  className="hover:border-border-hover transition-colors"
                >
                  <Icon
                    className="h-4 w-4 text-accent mb-3"
                    aria-hidden="true"
                  />

                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Fulfillment Flow */}
        <Section>
          <Card>
            <CardHeader title="Automated Fulfillment Flow" />

            <p className="text-sm text-muted leading-relaxed mb-8">
              The purchasing workflow is automated from payment through
              delivery, removing the need for manual order handling.
            </p>

            <div className="flex flex-col items-center gap-2">
              {gardenOfBecomingFulfillmentFlow.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="rounded-lg border border-border bg-background px-6 py-3 min-w-[240px] text-center">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase">
                      {step}
                    </p>
                  </div>

                  {index <
                    gardenOfBecomingFulfillmentFlow.length - 1 && (
                    <span
                      className="my-1 text-muted text-lg"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* Technical Stack */}
        <Section>
          <CardHeader title="Technical Stack" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gardenOfBecomingStackLayers.map((layer) => (
              <Card
                key={layer.label}
                className="hover:border-border-hover transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />

                  <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase">
                    {layer.label}
                  </p>
                </div>

                <ul className="space-y-2" role="list">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border bg-background px-2.5 py-1.5 text-xs font-mono text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Outcome */}
        <Section>
          <Card>
            <CardHeader title="Outcome & Impact" />

            <p className="text-sm text-muted leading-relaxed mb-8">
              The platform launched as a production digital commerce system
              and processed more than $10K in revenue during its first 90
              days. The automated fulfillment workflow removed the need for
              manual order handling while giving customers immediate access
              to their purchased content.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {gardenOfBecomingImpactMetrics.map((metric) => (
                <KpiCard
                  key={`outcome-${metric.label}`}
                  value={metric.value}
                  label={metric.label}
                  detail={metric.detail}
                />
              ))}
            </div>

            <ul
              className="grid gap-2 sm:grid-cols-2 text-sm text-muted"
              role="list"
            >
              {[
                "Production digital commerce platform",
                "Stripe-integrated checkout",
                "Custom JavaScript audiobook preview player",
                "Automated purchase and delivery emails",
                "Protected digital downloads",
                "Customer purchase management",
                "Zero manual fulfillment",
                "$10K+ revenue processed in first 90 days",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Project Links */}
        <Section>
          <Card className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase mb-2">
              {gardenOfBecomingMeta.name}
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Explore the live platform.
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button
                href={gardenOfBecomingMeta.liveUrl}
                external
                variant="primary"
              >
                View Live Site
              </Button>
            </div>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 mt-8 text-xs text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              Back to Projects
            </Link>
          </Card>
        </Section>
      </div>
    </div>
  );
}