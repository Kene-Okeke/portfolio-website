import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { contactInfo } from "@/data/contact";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const contactLinks = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: contactInfo.github.replace(/^https?:\/\//, ""),
    href: contactInfo.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: contactInfo.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: contactInfo.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-12 md:mt-16"
      aria-labelledby="contact-heading"
    >
      <CardHeader title="Let's Build Something" />
      <Card>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          Open to freelance projects, collaborations, and full-time
          opportunities. Reach out and let&apos;s discuss what you&apos;re
          building.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-border-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <link.icon
                className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-medium tracking-[0.12em] text-muted uppercase">
                  {link.label}
                </p>
                <p className="text-xs text-foreground truncate mt-0.5">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6">
          <Button href={`mailto:${contactInfo.email}`} variant="primary">
            <Mail className="w-4 h-4" aria-hidden="true" />
            Send Email
          </Button>
        </div>
      </Card>
    </section>
  );
}

export function FooterLinks() {
  const links = [
    { label: "GitHub", href: contactInfo.github },
    { label: "LinkedIn", href: contactInfo.linkedin },
    { label: "Email", href: `mailto:${contactInfo.email}` },
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label !== "Email" ? "_blank" : undefined}
          rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
          className="text-xs text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
