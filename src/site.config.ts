// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: "John Medina's blog",
  role: "Product design & frontend engineering",
  email: "johndoe@example.com",
  tagline: "I design and build interfaces that hold up under real use.",
  description:
    "Portfolio of John Medina — product design and frontend engineering, with an emphasis on speed, clarity, and the details most people skip.",
  status: "Currently building at Studio Co · Open to new work",
  social: [
    { label: "GitHub", href: "https://github.com/johnandresmedina" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/johnandresmedina/",
    },
  ],
  locale: "en",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;
