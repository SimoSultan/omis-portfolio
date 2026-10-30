export const en = {
  site: {
    title: "Omis Atelier",
    description: "Omis Atelier — crafting your ideas to reality since 2026",
  },
  nav: {
    primaryAria: "Primary",
    home: "home",
    contact: "contact",
    projects: "projects",
    homeAria: "Go to the home page",
    contactAria: "Email Omis Atelier",
    projectsAria: "View the projects list",
  },
  hero: {
    line1: "Omis",
    line2: "Atelier",
    ariaLabel: "Omis Atelier",
  },
  projects: {
    title: "Projects",
    ariaLabel: "Projects",
    cardAriaLabel: (name: string) => `View project: ${name}`,
  },
  project: {
    privacyCta: "view the privacy policy",
    privacyCriaLabel: "View the privacy policy",
  },
  privacy: {
    title: "Privacy Policy",
    pending: "This privacy policy is currently being drafted. Please check back soon.",
    backLabel: (name: string) => `back to ${name}`,
  },
} as const;
