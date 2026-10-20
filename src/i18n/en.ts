export const en = {
  site: {
    title: "OMIS Studios",
    description: "OMIS Studios — creative studio of Simon Curran, sole trader.",
  },
  nav: {
    primaryAria: "Primary",
    contact: "contact",
    projects: "projects",
    contactAria: "Email OMIS Studios",
    projectsAria: "View the projects list",
  },
  hero: {
    line1: "OMIS",
    line2: "Studios",
    ariaLabel: "OMIS Studios",
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
    backLabel: "Back to home",
  },
} as const;
