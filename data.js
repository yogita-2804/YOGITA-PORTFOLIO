/*
  ============================================================
  YOGITA SAHU PORTFOLIO — EASY EDIT FILE
  ============================================================
  You normally only need to edit THIS FILE.

  Add a new project by copying one project object in `projects`.
  Add a new resume by copying one object in `resumes`.
  You can also update your photo, links, skills, education and certificates here.
*/

const portfolioData = {
  profile: {
    name: "Yogita Sahu",
    firstName: "Yogita",
    lastName: "Sahu",
    role: "Software Engineer",
    shortRole: "Aspiring Software Engineer",
    tagline: "Building my path as a",
    heroAccent: "Software Engineer.",
    heroDescription:
      "MCA student in Generative AI with a passion for web development, problem solving and building useful digital experiences.",
    aboutTitle: "Learning, building,",
    aboutAccent: "growing.",
    about: [
      "I'm Yogita Sahu, currently pursuing an MCA in Generative AI at SRM University Chennai after completing my BCA.",
      "My goal is to become a Software Engineer. I'm especially interested in web development, Java, DSA and Generative AI, and I enjoy turning what I learn into practical projects."
    ],
    location: "Chennai, India",
    photo: "assets/profile.jpg",
    email: "yogitasahu2805@gmail.com",
    github: "https://github.com/yogita-2804", // Paste your GitHub profile URL here.
    linkedin: "https://www.linkedin.com/in/yogita-sahu-352334422",
    resume: "assets/resume.pdf"
  },

  learning: "DSA + Java",

  marquee: [
    "HTML", "CSS", "JAVASCRIPT", "JAVA", "PYTHON",
    "GENERATIVE AI", "GIT", "WEB DEVELOPMENT"
  ],

  skills: [
    { number: "01", icon: "</>", title: "Frontend", description: "HTML · CSS · JavaScript · Bootstrap" },
    { number: "02", icon: "J", title: "Programming", description: "Java · Python · C basics" },
    { number: "03", icon: "DB", title: "Database", description: "SQL · MySQL" },
    { number: "04", icon: "GH", title: "Tools", description: "Git · GitHub · VS Code" },
    { number: "05", icon: "AI", title: "Generative AI", description: "AI concepts and modern GenAI workflows" },
    { number: "06", icon: "↗", title: "Always Learning", description: "DSA · problem solving · software engineering" }
  ],

  projects: [
    {
      number: "01",
      featured: true,
      title: "FinTrack",
      browserText: "fintrack.app",
      description: "A web-based expense tracker created to help users record, organize and monitor their spending.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "#", // Add FinTrack GitHub URL here.
      live: "#",   // Add FinTrack Live Demo URL here.
      previewType: "fintrack"
    }
    // Add more projects below. Example:
    // ,{
    //   number: "02",
    //   featured: false,
    //   title: "AI Career Platform",
    //   browserText: "career-ai.app",
    //   description: "An AI-powered career and placement platform...",
    //   technologies: ["HTML", "CSS", "JavaScript", "Python"],
    //   github: "https://github.com/yourusername/project",
    //   live: "https://your-demo-link.com",
    //   previewType: "default"
    // }
  ],

  education: [
    {
      year: "2026 — Present",
      title: "MCA — Generative AI",
      place: "SRM University Chennai",
      description: "Building skills in software development, AI and problem solving."
    },
    {
      year: "Completed",
      title: "BCA",
      place: "Rungta College of Science and Technology",
      description: "Foundation in computer applications and web development."
    },
    {
      year: "2023",
      title: "12th — CBSE",
      place: "Shakuntala Vidyalaya, Ram Nagar Bhilai",
      description: ""
    },
    {
      year: "2021",
      title: "10th — CBSE",
      place: "Shakuntala Vidyalaya, Ram Nagar Bhilai",
      description: ""
    }
  ],

  certificates: [
    {
      number: "01",
      category: "Full Stack Web Development",
      title: "Web Development / Full Stack Certificate",
      description: "Add your certificate details or issuing organization here.",
      link: "#"
    }
  ],

  resumes: [
    {
      number: "01",
      title: "Software Engineer Resume",
      description: "My latest resume for software engineering and internship opportunities.",
      file: "assets/resume.pdf"
    }
    // Add another resume by copying the object above.
  ]
};
