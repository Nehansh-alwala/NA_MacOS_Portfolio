const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    
    title:
      "Data Preprocessing Toolkit : An Approach to Automate Data Preprocessing",
    image: "/images/blog1.png",
    link: "https://www.researchgate.net/publication/369495927_Data_Preprocessing_Toolkit_An_Approach_to_Automate_Data_Preprocessing",
  },
  {
    id: 2,
    
    title:
      "Automated Debugging : Still a Dream ?",
    image: "/images/blog1.png",
    link: "https://www.researchgate.net/publication/369404687_Automated_Debugging_Still_a_Dream",
  },
  
];

const techStack = [
  {
    category: "Frontend & Backend",
    items: ["React.js", "Node.js", "HTML5", "JavaScript (ES6+)", "Vite"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS3"],
  },
  {
    category: "Data Science & AI",
    items: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
  },
  {
    category: "Data Analysis & Visualization",
    items: ["SQL", "Pandas", "Matplotlib", "Tableau", "EDA"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "SQLite", "Supabase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebooks"],
  },
];


const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Nehansh-alwala",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nehanshalwala",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "MacOS Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-10", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "MacOS Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The macOS-style portfolio is a visually driven project designed to showcase my work in an interactive and engaging way. Instead of a traditional scrolling portfolio, it recreates a desktop-like experience inspired by macOS.",
            "It feels like opening and navigating apps on a real operating system, making exploration intuitive and fun.",
            "Built with React and Tailwind CSS, the project focuses on clean design, smooth interactions, and responsive performance, with GSAP used for a polished welcome animation.",
          ],
        },
        {
          id: 2,
          name: "nehansh-portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Lang2SQL",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-15",
      children: [
        {
          id: 1,
          name: "Lang2SQL Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Lang2SQL is an LLM-powered assistant that turns plain English into real SQL queries through a simple chat interface.",
            "Instead of writing complex SQL by hand, users can ask questions or give commands as if they were talking to a teammate.",
            "It feels like having a friendly AI data analyst that understands your intent and instantly works with your database.",
            "Built with Streamlit and powered by Gemini AI, Lang2SQL supports SQLite databases, CSVs, and Excel files, offering live query results, schema visibility, and downloadable updated databases—all in one clean, interactive experience.",
          ],
        },
        {
          id: 2,
          name: "lang2sql.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nehansh-alwala/Lang2SQL",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "lang2sql.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Gemini Clone web-app",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-5",
      children: [
        {
          id: 1,
          name: "Gemini Clone web-app Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Gemini Clone is a conversational AI web app designed to replicate the core experience of Google’s Gemini.",
            "Instead of static prompts or basic responses, it delivers real-time, chat-based interactions powered by a large language model.",
            "It feels like having an intelligent assistant that can answer questions, explain concepts, and help with everyday tasks directly in the browser.",
            "Built with React and the Gemini API, the app focuses on a clean UI, fast responses, and a smooth chat experience, showcasing how modern front-end development can integrate powerful AI models seamlessly.",
          ],
        },
        {
          id: 2,
          name: "gemini-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nehansh-alwala/gemini/tree/main",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "gemini-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        
      ],
    },
    {
      id: 8,
      name: "More Projects",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-100",
      windowPosition: "top-[80vh] left-12",
      children: [
        {
          id: 1,
          name: "myGithub.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-52 right-80",
          href: "https://github.com/Nehansh-alwala?tab=repositories",
        },
      ]
      
    }
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "magazine.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-42",
      imageUrl: "/images/me-2.jpg",
    },
    
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpg",
      description: [
        "Hey! I’m Nehansh 👋. I’m a Frontend Developer who loves building websites that are as fast as they are beautiful. I specialize in the React ecosystem, turning complex ideas into clean, snappy interfaces ⚡",
        "With a soft spot for Data Science, I often use Python and Machine Learning to make my apps smarter 🧠",
        " I love bridging the gap between a robust backend and a delightful user experience—nothing beats a pixel-perfect design and a clean console! 🚀"],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 right-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };