export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "changes - a changelog generator",
    techs: ["rust"],
    link: "https://github.com/kwigley/changes",
  },
];

export default projects;
