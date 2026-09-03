export const personalInfo = {
  name: "Amir Ansari",
  title: "Frontend Developer | React.js Developer | Next.js Developer",
  email: "aamir10031999@gmail.com",
  phone: "+91-6200820423",
  location: "Indirapuram, Ghaziabad, Uttar Pradesh - 201014",
  github: "https://github.com/developwithraza",
  linkedin: "https://www.linkedin.com/in/amir-ansari-70162917a/",
  status: "Available for Frontend Developer Opportunities",
  summary: `React.js Developer with 3+ years of experience building responsive, scalable, and high-performance web applications using React.js, Next.js, JavaScript, TypeScript, Redux Toolkit, and modern UI frameworks.
Experienced in developing admin dashboards, e-commerce platforms, property booking systems, healthcare applications, daycare management systems, real-time chat applications, role-based access systems, payment gateway integrations, map-based features, and API-driven applications.
Strong frontend development experience with REST APIs, RTK Query, Socket.IO, WebSockets, Firebase, Google Maps APIs, AWS EC2/VPS deployment environments, and practical backend understanding of Node.js, Express.js, and MongoDB.`,
  keyStrengths: [
    "Frontend Architecture",
    "Reusable Components",
    "API Integration",
    "State Management",
    "Real-Time Applications",
    "Role-Based Access Control",
    "Payment Integration",
    "Dashboard Development",
    "Performance Optimization",
    "Responsive Design"
  ],
  stats: [
    { label: "Years Experience", value: "3+", icon: "Briefcase" },
    { label: "Projects Delivered", value: "10+", icon: "Layers" },
    { label: "Tech Stack Tools", value: "20+", icon: "Code2" },
    { label: "Realtime & Dashboards", value: "100%", icon: "Zap" },
  ]
};

export const skillsData = {
  highlighted: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "REST APIs",
    "Socket.IO",
    "WebSockets",
    "Firebase",
    "AWS EC2",
    "VPS",
    "Payment Gateway",
    "Google Maps API",
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  categories: [
    {
      title: "Frontend Development",
      icon: "Layout",
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "State Management & Architecture",
      icon: "Cpu",
      color: "from-purple-500 to-indigo-500",
      skills: ["Redux Toolkit", "RTK Query", "Context API", "Frontend Architecture", "Reusable Components"]
    },
    {
      title: "UI & Styling",
      icon: "Palette",
      color: "from-pink-500 to-rose-500",
      skills: ["Tailwind CSS", "Ant Design", "React Bootstrap", "DaisyUI", "Responsive Design", "Framer Motion"]
    },
    {
      title: "APIs & Authentication",
      icon: "ShieldCheck",
      color: "from-amber-500 to-orange-500",
      skills: ["REST APIs", "Axios", "JWT Authentication", "API Integration", "Postman", "Role-Based Access Control"]
    },
    {
      title: "Real-Time & Cloud Services",
      icon: "Radio",
      color: "from-emerald-500 to-teal-500",
      skills: ["Socket.IO", "WebSockets", "Firebase Realtime", "Google Maps API", "AWS EC2", "AWS Amplify", "Vercel", "VPS"]
    },
    {
      title: "Backend & Integrations",
      icon: "Database",
      color: "from-cyan-500 to-blue-600",
      skills: ["Node.js", "Express.js", "MongoDB", "HDFC Smart Gateway", "Payment Gateways", "Git", "GitHub", "Vite"]
    }
  ]
};

export const experiencesData = [
  {
    company: "Corewave Tech",
    role: "React.js Developer & Next.js Developer",
    period: "Dec 2023 – Present",
    duration: "1+ Years",
    location: "Sector 63, Noida, Uttar Pradesh",
    type: "Full-Time",
    responsibilities: [
      "Developed and maintained scalable web applications using React.js, Next.js, JavaScript, and TypeScript.",
      "Designed reusable and responsive UI components using Ant Design, Tailwind CSS, React Bootstrap, and CSS.",
      "Integrated REST APIs using Axios and managed server state using Redux Toolkit and RTK Query.",
      "Implemented authentication, authorization, protected routes, and role-based access control (RBAC).",
      "Developed admin dashboards containing dynamic tables, filters, pagination, forms, charts, and analytics.",
      "Integrated payment gateways and implemented checkout, payment status, and transaction workflows.",
      "Implemented real-time communication and chat functionality using Socket.IO and WebSockets.",
      "Integrated Firebase services for application functionality and push notifications.",
      "Integrated Google Maps APIs for maps, location tracking, distance calculation, and location-based features.",
      "Worked with AWS Amplify and Vercel for frontend deployment and CI/CD pipelines.",
      "Integrated third-party APIs and AI APIs into frontend applications with robust error handling.",
      "Worked with backend APIs with practical understanding of Node.js, Express.js, and MongoDB."
    ],
    environment: [
      "React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query",
      "Ant Design", "Tailwind CSS", "Axios", "Socket.IO", "Firebase",
      "Google Maps API", "AWS EC2", "VPS", "REST APIs"
    ]
  },
  {
    company: "Vixspace",
    role: "React.js Developer",
    period: "Mar 2022 – Nov 2023",
    duration: "1 Year 8 Months",
    location: "Gachibowli, Hyderabad",
    type: "Full-Time",
    responsibilities: [
      "Developed responsive web applications using React.js, JavaScript, HTML, and CSS.",
      "Created modular, reusable React components and highly responsive layouts across all device viewports.",
      "Integrated REST APIs and implemented secure JWT authentication and token refresh workflows.",
      "Developed admin dashboards and business management modules for seamless enterprise operations.",
      "Implemented dynamic forms, complex data tables, advanced filters, pagination, and API-driven UI.",
      "Used Redux and Context API for structured application state management.",
      "Worked with React Bootstrap and CSS for responsive UI development and cross-browser consistency.",
      "Collaborated with backend developers and UI/UX designers to deliver production-ready features.",
      "Fixed bugs, optimized web vitals and application performance, and supported active production applications."
    ],
    environment: [
      "React.js", "JavaScript", "Redux", "Context API",
      "React Bootstrap", "REST APIs", "JWT", "HTML5", "CSS3"
    ]
  }
];

export const projectsData = [
  {
    id: "cubcare",
    title: "CubCare – Daycare Management Platform",
    category: "Enterprise SaaS & Realtime",
    duration: "9 months",
    role: "Frontend Developer",
    featured: true,
    tagline: "Centralized multi-role daycare operations, staff scheduling, and real-time parent communication",
    overview: "CubCare is a comprehensive daycare management platform designed to manage children, teachers, staff, daycare operations, permissions, and access modules through a centralized management system.",
    modules: "Admin, Staff, Teacher, Child / Parent Access",
    responsibilities: [
      "Developed role-based dashboards and granular access control modules (RBAC).",
      "Implemented separate tailored modules for Admin, Staff, Teacher, and Child/Parent management.",
      "Integrated REST APIs using Axios and RTK Query for efficient server state caching.",
      "Implemented JWT authentication and role-protected client-side routes.",
      "Developed high-performance responsive admin dashboard interfaces.",
      "Integrated Firebase services for storage and real-time updates.",
      "Implemented real-time chat and communication functionality using Socket.IO and WebSockets.",
      "Implemented role-based UI rendering dynamically matching user permissions."
    ],
    techStack: [
      "React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Ant Design", "Axios", "Socket.IO", "Firebase", "REST APIs", "Tailwind CSS"
    ],
    illustration: "daycare",
    metrics: [
      { label: "Roles Handled", value: "4 Modules" },
      { label: "State Engine", value: "RTK Query" },
      { label: "Messaging", value: "Socket.IO Real-time" }
    ]
  },
  {
    id: "homies-stay",
    title: "Homies Stay – Property Booking Platform",
    category: "Booking & FinTech",
    duration: "7 months",
    role: "Frontend Developer",
    featured: true,
    tagline: "Modern property management and booking engine with seamless payment gateway checkout",
    overview: "Homies Stay is a property management and booking platform that allows administrators to manage properties, segments, bookings, payments, and property-related information through a centralized admin panel.",
    responsibilities: [
      "Developed the complete admin panel for property listing and operational management.",
      "Implemented add, edit, update, and property status lifecycle management modules.",
      "Developed property segment, amenities, and category management features.",
      "Implemented property booking management and reservation schedule calendar.",
      "Developed booking status and transaction management with real-time feedback.",
      "Integrated payment gateway and payment status handling with automated receipt generation.",
      "Integrated REST APIs using Axios and RTK Query."
    ],
    techStack: [
      "React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Ant Design", "Payment Gateway", "Axios", "REST APIs"
    ],
    illustration: "property",
    metrics: [
      { label: "Modules", value: "Admin & Booking" },
      { label: "Payments", value: "Gateway Integrated" },
      { label: "Architecture", value: "Next.js + RTK" }
    ]
  },
  {
    id: "eye-setu",
    title: "Eye Setu – Healthcare & E-commerce Platform",
    category: "Healthcare & Analytics",
    duration: "6 months",
    role: "Frontend Developer",
    featured: true,
    tagline: "Telehealth optical consultation, medicine store, doctor scheduling, and interactive analytics",
    overview: "Eye Setu is a healthcare and e-commerce platform providing eye consultation, medicines, goggles, and eye surgery-related services managed through a centralized dashboard.",
    responsibilities: [
      "Developed dynamic category-based filtering, faceted search, and catalog navigation.",
      "Developed comprehensive admin dashboard for product and patient order management.",
      "Implemented patient appointment booking and doctor scheduling calendar.",
      "Implemented doctor and optometrist assignment functionality based on availability.",
      "Integrated Google Maps APIs for clinic location finder, distance calculation, and routing.",
      "Integrated ECharts for visual analytics dashboards (consultation stats, sales trends, patient metrics).",
      "Developed optical product e-commerce modules for goggles and prescription medicines.",
      "Developed responsive and reusable UI components with accessible design."
    ],
    techStack: [
      "React.js", "Ant Design", "Redux Toolkit", "RTK Query", "ECharts", "Google Maps API", "REST APIs", "Tailwind CSS"
    ],
    illustration: "healthcare",
    metrics: [
      { label: "Analytics", value: "ECharts Dashboards" },
      { label: "Geolocation", value: "Google Maps API" },
      { label: "Domain", value: "Health & E-commerce" }
    ]
  },
  {
    id: "grocery-delivery",
    title: "Grocery Delivery Web Application",
    category: "E-Commerce & Logistics",
    duration: "1 year 4 months",
    role: "Frontend Developer",
    featured: true,
    tagline: "High-speed grocery ordering platform with branch dispatch, KOT generation, and HDFC payment",
    overview: "A responsive grocery delivery and e-commerce platform with product catalog management, cart, checkout, payments, order tracking, branch operations, delivery personnel dispatch, billing, and KOT generation.",
    responsibilities: [
      "Developed dynamic product listing, multi-level filtering, instant search, and category exploration.",
      "Implemented performant cart state and frictionless multi-step checkout functionality.",
      "Integrated HDFC Smart Payment Gateway for secure transactions and instant confirmation.",
      "Developed branch dashboard for delivery personnel assignment, status tracking, and dispatch.",
      "Implemented automated billing and KOT (Kitchen/Store Order Ticket) generation modules.",
      "Developed responsive, mobile-first UI using React.js and Ant Design.",
      "Integrated REST APIs and managed complex multi-store application state."
    ],
    techStack: [
      "React.js", "Redux Toolkit", "RTK Query", "Ant Design", "JavaScript", "HDFC Payment Gateway", "JWT", "REST APIs"
    ],
    illustration: "delivery",
    metrics: [
      { label: "Payment", value: "HDFC Smart Gateway" },
      { label: "Logistics", value: "Branch & KOT System" },
      { label: "Duration", value: "1 Year 4 Months" }
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech. in Computer Science",
    institution: "R.G.V.P University",
    period: "Aug 2019 – May 2022",
    location: "Bhopal, Madhya Pradesh",
    description: "Specialized in Computer Science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Software Engineering."
  },
  {
    degree: "Diploma in Information Technology",
    institution: "MANUU University",
    period: "Aug 2016 – May 2019",
    location: "Hyderabad, Telangana",
    description: "Foundational diploma in Information Technology, Web Development, Computer Networks, Operating Systems, and Programming Principles."
  }
];

export const languagesData = [
  { language: "English", level: "Professional Working Proficiency", rating: 4 },
  { language: "Hindi", level: "Native / Bilingual", rating: 5 }
];
