type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  desc: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "mail@kylewigs.com",
  title: "Welcome, I’m Kyle",
  desc: "Kyle Wigley's blog about software engineering and portfolio.",
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
