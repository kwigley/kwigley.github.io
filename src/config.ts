// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
  siteUrl: "https://kylewigs.com/", // Always put "/" at the end of the URL
  author: "Kyle Wigley",
  desc: "A personal portfolio landing template for developers and designers.",
  title: "Kyle Wigley",
  ogImage: "me.jpg",
  keywords: "Personal portfolio, developer portfolio, software engineer",
  postPerPage: 9,
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
  {
    name: "Github",
    href: "https://github.com/kwigley",
    icon: "ph:github-logo-duotone",
    title: `Follow ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kylewigley",
    icon: "ph:instagram-logo-duotone",
    title: `Follow ${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kylewigley",
    icon: "ph:linkedin-logo-duotone",
    title: `Follow ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mail@kylewigs.com",
    title: `Send an email to ${SITE.title}`,
    icon: "",
    active: false,
  },
  {
    name: "Twitter",
    href: "https://x.com/kylewigs",
    icon: "ph:twitter-logo-duotone",
    title: `Follow ${SITE.author} on Twitter`,
    active: true,
  },
];
