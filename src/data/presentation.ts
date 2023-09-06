type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "mail@kylewigs.com",
  title: "Hi, I’m Kyle 👋",
  profile: "/me.jpg",
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/kylewigs",
    },
    {
      label: "GitHub",
      link: "https://github.com/kwigley",
    },
  ],
};

export default presentation;
