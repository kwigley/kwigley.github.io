type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "mail@kylewigs.com",
  title: "Hi, I’m Kyle 👋",
  // profile: "/me.jpg",
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
