"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Database,
  ImageIcon,
  Layers,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Package,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { ScreenshotPlaceholder } from "@/components/dashboard/ScreenshotPlaceholder";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import {
  shopElevenAdminSections,
  shopElevenCheckoutFlow,
  shopElevenDatabaseTables,
  shopElevenHighlights,
  shopElevenImages,
  shopElevenMeta,
  shopElevenSnapshot,
  shopElevenSnippets,
  shopElevenStackLayers,
  shopElevenUnderTheHood,
} from "@/data/shop-eleven";
import { cn } from "@/lib/utils";

const highlightIcons = [
  Package,
  MonitorSmartphone,
  ShoppingCart,
  ImageIcon,
  MessageCircle,
  Database,
  LayoutDashboard,
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

function MobileFrame({
  src,
  alt,
  label,
  width,
  height,
}: {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[180px] sm:w-[200px] rounded-[1.75rem] border border-border bg-panel p-2 shadow-lg shadow-black/20">
        <div className="overflow-hidden rounded-[1.25rem] border border-border/60">
          <ScreenshotPlaceholder
            src={src}
            alt={alt}
            variant="full"
            width={width}
            height={height}
          />
        </div>
      </div>
      <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
    </div>
  );
}

export function ShopElevenCaseStudy() {
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

        {/* 1. Hero */}
        <Section>
          <div className="rounded-xl border border-border bg-panel/90 overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-0">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase mb-4">
                  Case Study
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  {shopElevenMeta.name}
                </h1>
                <p className="mt-2 text-sm md:text-base font-medium tracking-wide text-muted uppercase">
                  {shopElevenMeta.tagline}
                </p>
                <p className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-xl">
                  {shopElevenMeta.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <MetaCard label="Role" value={shopElevenMeta.role} />
                  <MetaCard label="Stack" value={shopElevenMeta.stack} />
                  <MetaCard label="Status" value={shopElevenMeta.status} />
                  <MetaCard label="Category" value={shopElevenMeta.category} />
                </div>
              </div>
              <div className="border-t lg:border-t-0 lg:border-l border-border bg-background/40 p-4 md:p-6">
                <ScreenshotPlaceholder
                  src={shopElevenImages.hero.src}
                  alt={shopElevenImages.hero.alt}
                  variant="full"
                  width={shopElevenImages.hero.width}
                  height={shopElevenImages.hero.height}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Project Snapshot */}
        <Section>
          <CardHeader title="Project Snapshot" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {shopElevenSnapshot.map((item) => (
              <Card
                key={item.number}
                className="hover:border-border-hover transition-colors"
              >
                <p className="font-mono text-2xl text-accent/80 mb-3">
                  {item.number}
                </p>
                <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* 3. The Problem */}
        <Section>
          <Card>
            <CardHeader title="The Problem" />
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  Shop Eleven needed a straightforward e-commerce experience
                  where customers could browse products, manage their cart, and
                  quickly move from product discovery to placing an order.
                </p>
                <p>
                  The application needed to work well across desktop and mobile
                  while keeping the purchasing flow simple.
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-border bg-background p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-2">
                  Requirement Focus
                </p>
                <ul className="space-y-2 text-sm text-muted" role="list">
                  <li>Product discovery without friction</li>
                  <li>Cart management before checkout</li>
                  <li>Responsive storefront experience</li>
                  <li>Simple order handoff workflow</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        {/* 4. The Solution */}
        <Section>
          <Card>
            <CardHeader title="The Solution" />
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                I built the application using Laravel as the backend and
                application framework, with Blade templates rendering the
                storefront interface.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2" role="list">
                {[
                  "Dynamic product data from MySQL",
                  "Database-backed product catalog",
                  "Responsive shop interface",
                  "Client-side cart with localStorage",
                  "Cloudinary image management",
                  "WhatsApp checkout handoff",
                  "Authenticated admin dashboard",
                  "Product catalog administration",
                  "Category administration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Section>

        {/* 5. Responsive Experience */}
        <Section>
          <Card>
            <CardHeader title="Responsive by Default" />
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
              <ScreenshotPlaceholder
                src={shopElevenImages.desktop.src}
                alt={shopElevenImages.desktop.alt}
                variant="full"
                width={shopElevenImages.desktop.width}
                height={shopElevenImages.desktop.height}
              />
              <div className="flex flex-wrap justify-center gap-6 lg:flex-col lg:items-center">
                <MobileFrame
                  src={shopElevenImages.mobileHome.src}
                  alt={shopElevenImages.mobileHome.alt}
                  label="Mobile Home"
                  width={shopElevenImages.mobileHome.width}
                  height={shopElevenImages.mobileHome.height}
                />
                <MobileFrame
                  src={shopElevenImages.mobileShop.src}
                  alt={shopElevenImages.mobileShop.alt}
                  label="Mobile Shop"
                  width={shopElevenImages.mobileShop.width}
                  height={shopElevenImages.mobileShop.height}
                />
              </div>
            </div>
            <p className="mt-6 text-xs text-muted text-center font-mono tracking-wide">
              Designed to remain usable across desktop and mobile screen sizes.
            </p>
          </Card>
        </Section>

        {/* 6. Shop Experience — hybrid: screenshot + text side-by-side; code under description */}
        <Section>
          <Card>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <ScreenshotPlaceholder
                src={shopElevenImages.shop.src}
                alt={shopElevenImages.shop.alt}
                variant="full"
                width={shopElevenImages.shop.width}
                height={shopElevenImages.shop.height}
              />
              <div className="flex min-w-0 flex-col gap-4">
                <div>
                  <CardHeader title="Product Discovery" className="mb-3" />
                  <p className="text-sm text-muted leading-relaxed">
                    The shop interface dynamically presents available products
                    while keeping navigation, categories, and product discovery
                    straightforward.
                  </p>
                </div>
                <CodeBlock
                  filename={shopElevenSnippets.shopPage.filename}
                  language={shopElevenSnippets.shopPage.language}
                  code={shopElevenSnippets.shopPage.code}
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* 7. Cloudinary */}
        <Section>
          <Card>
            <CardHeader title="Media Management" />
            <p className="text-sm text-muted leading-relaxed mb-6">
              Product imagery is managed through Cloudinary, allowing the
              application to work with externally hosted product assets rather
              than relying entirely on local server storage.
            </p>
            <ScreenshotPlaceholder
              src={shopElevenImages.cloudinary.src}
              alt={shopElevenImages.cloudinary.alt}
              variant="full"
              width={shopElevenImages.cloudinary.width}
              height={shopElevenImages.cloudinary.height}
            />
            <div className="mt-6">
              <CodeBlock
                filename={shopElevenSnippets.cloudinary.filename}
                language={shopElevenSnippets.cloudinary.language}
                code={shopElevenSnippets.cloudinary.code}
              />
            </div>
          </Card>
        </Section>

        {/* 8. Cart System */}
        <Section>
          <Card>
            <CardHeader title="Cart Architecture" />
            <div className="space-y-6">
              <p className="text-sm text-muted leading-relaxed">
                The cart is implemented in JavaScript with localStorage as the
                source of truth. It supports quantity updates, item removal,
                and checkout handoff via WhatsApp.
              </p>
              <CodeBlock
                filename={shopElevenSnippets.cart.filename}
                language={shopElevenSnippets.cart.language}
                code={shopElevenSnippets.cart.code}
              />
            </div>
          </Card>
        </Section>

        {/* 9. WhatsApp Checkout */}
        <Section>
          <Card>
            <CardHeader title="Checkout Flow" />
            <p className="text-sm text-muted leading-relaxed mb-8">
              Rather than implementing an online card payment gateway, Shop
              Eleven uses WhatsApp as the final ordering channel. The
              customer&apos;s cart and order information is prepared and
              transferred into WhatsApp to continue the purchase conversation.
            </p>
            <div className="flex flex-col items-center gap-2 mb-8">
              {shopElevenCheckoutFlow.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="rounded-lg border border-border bg-background px-6 py-3 min-w-[220px] text-center">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase">
                      {step}
                    </p>
                  </div>
                  {index < shopElevenCheckoutFlow.length - 1 && (
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
            <CodeBlock
              filename={shopElevenSnippets.whatsappCheckout.filename}
              language={shopElevenSnippets.whatsappCheckout.language}
              code={shopElevenSnippets.whatsappCheckout.code}
            />
          </Card>
        </Section>

        {/* 10. Admin Dashboard */}
        {shopElevenAdminSections.map((section) => {
          const image = shopElevenImages[section.imageKey];
          return (
            <Section key={section.id}>
              <Card>
                <CardHeader title={section.title} />
                <div className="space-y-6">
                  <p className="text-sm text-muted leading-relaxed">
                    {section.description}
                  </p>
                  <ScreenshotPlaceholder
                    src={image.src}
                    alt={image.alt}
                    variant="full"
                    width={image.width}
                    height={image.height}
                  />
                </div>
              </Card>
            </Section>
          );
        })}

        {/* 15. Database / Backend */}
        <Section>
          <Card>
            <CardHeader title="Backend & Data" />
            <ScreenshotPlaceholder
              src={shopElevenImages.database.src}
              alt={shopElevenImages.database.alt}
              variant="full"
              width={shopElevenImages.database.width}
              height={shopElevenImages.database.height}
            />
            <p className="mt-6 text-sm text-muted leading-relaxed">
              Laravel handles the application logic and database interactions,
              with MySQL providing persistent storage for the application&apos;s
              core data — including products, categories, and orders. Cart
              state lives in the browser via localStorage, separate from the
              backend.
            </p>
            <div className="mt-6">
              <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                Schema Overview
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {shopElevenDatabaseTables.map((table) => (
                  <div
                    key={table.name}
                    className="rounded-lg border border-border bg-background px-4 py-3"
                  >
                    <p className="font-mono text-xs text-accent mb-1.5">
                      {table.name}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {table.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Section>

        {/* 16. Architecture / Tech Stack */}
        <Section>
          <CardHeader title="Architecture / Tech Stack" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {shopElevenStackLayers.map((layer) => (
              <Card
                key={layer.label}
                className="hover:border-border-hover transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-4 w-4 text-accent" aria-hidden="true" />
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

        {/* 17. Technical Highlights */}
        <Section>
          <CardHeader title="What I Built" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shopElevenHighlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;
              return (
                <Card
                  key={item.title}
                  className="hover:border-border-hover transition-colors"
                >
                  <Icon
                    className="h-4 w-4 text-accent mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* 18. Under the Hood */}
        <Section>
          <CardHeader title="Under the Hood" />
          <div className="space-y-4">
            {shopElevenUnderTheHood.map((snippet) => (
              <CodeBlock
                key={snippet.id}
                filename={snippet.filename}
                language={snippet.language}
                code={snippet.code}
              />
            ))}
          </div>
        </Section>

        {/* 19. Outcome */}
        <Section>
          <Card>
            <CardHeader title="Outcome" />
            <p className="text-sm text-muted leading-relaxed mb-4">
              Shop Eleven resulted in a working full-stack e-commerce application
              with a customer-facing storefront and an authenticated admin
              system for store management — including product browsing, a
              responsive shop interface, cart functionality, Cloudinary-powered
              product imagery, WhatsApp-based checkout, and a Laravel/MySQL
              backend.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted" role="list">
              {[
                "Customer-facing storefront",
                "Authenticated admin dashboard",
                "Product catalog administration",
                "Responsive shop interface",
                "Cart functionality",
                "Cloudinary-powered product imagery",
                "WhatsApp-based checkout",
                "Laravel/MySQL backend",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* 20. Project Links */}
        <Section>
          <Card className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase mb-2">
              {shopElevenMeta.name}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Explore the live application.
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button href={shopElevenMeta.liveUrl} external variant="primary">
                View Live Site
              </Button>
              <Button
                href={shopElevenMeta.githubUrl}
                external
                variant="secondary"
              >
                View Source Code
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
