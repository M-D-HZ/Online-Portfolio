import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  cSharp,
  ua,
  python,
  antlr,
  bash,
  cPlusPlus,
  flask,
  java,
  postgresql,
  scrum,
  svelte,
  vite,
  threejs,
  JsTs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "JavaScript and typescript",
    icon: JsTs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Scrum",
    icon: scrum,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "University of Antwerp (Student)",
    icon: ua,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
   {
     title: "Software Developer",
     company_name: "University of Antwerp (Student)",
     icon: ua,
     iconBg: "#E6DEDD",
     date: "Jan 2021 - Feb 2022",
     points: [
       "Crafting robust software solutions using Python, Java, or similar languages, along with relevant frameworks and libraries.\n" +
       "Engaging in cross-disciplinary collaboration with designers, product managers, and fellow engineers to deliver innovative and scalable products.\n" +
       "Championing best practices in coding standards, documentation, and version control, fostering a culture of excellence and efficiency.\n" +
       "Contributing to comprehensive testing strategies, including unit tests, integration tests, and end-to-end tests, to uphold product quality.\n" +
       "Participating actively in peer code reviews, offering constructive feedback and driving continuous improvement in codebase quality.",
     ],
   },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "News Aggregator",
    description:
      "In our news aggregator project, we strategically chose a tech stack that capitalized on our team's strengths and facilitated rapid collaboration. Python with Flask on the backend leveraged our existing Python expertise while offering a beginner-friendly framework for seamless adaptation. Svelte-Kit and TailwindCSS on the frontend enabled swift page creation and component sharing, showcasing our focus on productivity and user experience. Integrating Prisma as our ORM framework underscored our commitment to security and best practices, ensuring robust database interactions. This holistic approach minimized the learning curve and amplified our development velocity, positioning us as adaptable and results-driven professionals. Our tech choices highlighted our ability to balance efficiency with quality, making us valuable assets in any technical environment.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind/svelte-kit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/florrdv/news-aggregator?tab=readme-ov-file",
  },
  {
    name: "Markov Text Generator",
    description:
      "Writing a book is hard, but in this day and age we have computers to help us with correcting text and avoiding common grammar mistakes. Now, why won't we let a computer write the book for us.\n" +
        "\n" +
        "Of course this is with a little guidance and computers are not always perfect. Hence we allow the user to add some words and let the computer auto-complete this. On top of that, we know that any artist sometimes get their reference from other books and texts, so we got something for that too on out plan.",
    tags: [
      {
        name: "Markov-chains",
        color: "blue-text-gradient",
      },
      {
        name: "Text-generation",
        color: "green-text-gradient",
      },
      {
        name: "QT5",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/M-D-HZ/TOg_TXT_Generator",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };