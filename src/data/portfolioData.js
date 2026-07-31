export const personalDetails = {
  name: "Shreya Mishra",
  role: "Data Analyst & Data Science Enthusiast",
  subTitle: "Aspiring Data Analyst | Data Science Enthusiast | Computer Science Engineer",
  summary: "Passionate about transforming raw dataset metrics into strategic business intelligence. Experienced in building ML predictive models, interactive Power BI/Tableau dashboards, and clean data pipelines.",
  location: "Kolkata, India",
  email: "shreyamishra.work@gmail.com",
  github: "https://github.com/shreyamishra-sudo",
  linkedin: "https://linkedin.com/in/shreya-mishra-analytics",
  resumeUrl: "/assets/Shreya_Mishra_Resume.pdf",
  profileImage: "/assets/profile.jpg"
};

export const kpiMetrics = [
  {
    id: "cgpa",
    label: "Academic CGPA",
    value: "9.36",
    subtext: "Computer Science Engineering",
    icon: "Award",
    trend: "+0.12 vs avg",
    sparkline: [8.8, 9.0, 9.15, 9.28, 9.36]
  },
  {
    id: "internships",
    label: "Active Internships",
    value: "2",
    subtext: "LazyStudents.in & EduLinkUp",
    icon: "Briefcase",
    trend: "Product Analytics & EDA",
    sparkline: [0, 1, 1, 2, 2]
  },
  {
    id: "records",
    label: "Records Analyzed",
    value: "7,000+",
    subtext: "Customer Churn & Retail Datasets",
    icon: "Database",
    trend: "High Precision ML",
    sparkline: [500, 1200, 3500, 5000, 7200]
  },
  {
    id: "certifications",
    label: "Certifications",
    value: "7+",
    subtext: "Google Cloud, Oracle, Deloitte",
    icon: "CheckCircle",
    trend: "100% Verified",
    sparkline: [2, 3, 5, 6, 7]
  },
  {
    id: "rank",
    label: "CodeVita Rank",
    value: "5,197",
    subtext: "TCS CodeVita Season 13 Global",
    icon: "Trophy",
    trend: "Top Percentile",
    sparkline: [12000, 9500, 7800, 6100, 5197]
  }
];

export const experienceData = [
  {
    id: "lazystudents",
    role: "Data Analyst Intern",
    company: "LazyStudents.in",
    period: "June 2026 – Present",
    location: "Remote / Kolkata",
    type: "Internship",
    description: "Focusing on product analytics, document tool QA testing, AI strategy integration, and executive BI reporting.",
    bullets: [
      "Spearheaded product analytics and quality assurance testing across PDF and document processing tools.",
      "Conducted AI integration research and authored the internal AI recommendation strategy report.",
      "Collaborated on BI dashboard planning to track active user retention and document workflow efficiency metrics.",
      "Structured comprehensive product documentation for backend logic and user analytics pipelines."
    ],
    skills: ["Python", "Product Analytics", "QA Testing", "AI Integration", "BI Reporting"]
  },
  {
    id: "edulinkup",
    role: "Data Science Intern",
    company: "EduLinkUp",
    period: "February 2026 – Present",
    location: "Remote",
    type: "Internship",
    description: "Executing end-to-end data cleaning pipelines, feature extraction, and exploratory data analysis (EDA).",
    bullets: [
      "Conducted end-to-end data cleaning, transformation, and exploratory data analysis (EDA) using Python & Jupyter.",
      "Built automated data processing scripts for structured and semi-structured datasets.",
      "Prepared analytical reports and visual summaries to assist product decision-making."
    ],
    skills: ["Python", "Pandas", "NumPy", "Jupyter", "EDA", "Data Cleaning"]
  },
  {
    id: "metro-fasteners",
    role: "Freelance Web Developer",
    company: "Metro Fasteners",
    period: "June 2025 – August 2025",
    location: "Kolkata, India",
    type: "Freelance",
    description: "Built a responsive B2B web catalog with an interactive engineering unit conversion module.",
    bullets: [
      "Built a responsive B2B product catalog using React, TypeScript, Tailwind CSS, and Vite.",
      "Implemented custom engineering unit conversion features for B2B client specifications.",
      "Optimized client-side rendering speed and cross-device interface usability."
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Web Development"]
  }
];

export const projectCategories = [
  "All",
  "Data Analysis",
  "Machine Learning",
  "Business Intelligence",
  "Web Development"
];

export const projectsData = [
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction & Business Analytics Dashboard",
    shortDesc: "ML classification pipeline on 7,000+ customer records paired with an interactive Power BI risk & retention dashboard.",
    categoryTags: ["Machine Learning", "Business Intelligence"],
    techStack: ["Python", "Scikit-learn", "Pandas", "Power BI", "Random Forest"],
    metrics: "7,000+ Customer Records | 89% Model Precision",
    githubUrl: "https://github.com/shreyamishra-sudo",
    featured: true,
    details: "Built an ML pipeline comparing Logistic Regression, Decision Tree, and Random Forest models. Delivered an interactive Power BI dashboard featuring churn KPIs, customer segmentation, risk scoring, and retention recommendations."
  },
  {
    id: "retail-sales-tableau",
    title: "Retail Sales Data Analytics (SQL & Tableau)",
    shortDesc: "SQL-driven exploratory analysis evaluating revenue drivers, category profitability, and regional sales distribution.",
    categoryTags: ["Business Intelligence", "Data Analysis"],
    techStack: ["SQL", "Tableau", "PostgreSQL", "Data Visualization"],
    metrics: "Interactive Tableau Suite | Multi-regional Insights",
    githubUrl: "https://github.com/shreyamishra-sudo/retail-sales-data-analytics",
    featured: true,
    details: "Conducted deep-dive SQL queries across retail sales records, determining top revenue categories, customer purchasing frequency, and regional margins. Visualized findings in an interactive Tableau dashboard."
  },
  {
    id: "eda-retail-dataset",
    title: "Exploratory Data Analysis on Retail Dataset",
    shortDesc: "Comprehensive EDA on 1,000+ transaction records discovering seasonal trends and buyer demographics.",
    categoryTags: ["Data Analysis"],
    techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    metrics: "1,000 Transactions | Time-Series Trends",
    githubUrl: "https://github.com/shreyamishra-sudo/eda_project",
    featured: false,
    details: "Cleaned raw transaction datasets, handled missing values, performed time-series decomposition, and visualized category correlation matrices to assist marketing strategy."
  },
  {
    id: "wifi-security-auditor",
    title: "ESP32-Based Wi-Fi Security Auditor & Honeypot System",
    shortDesc: "Final-year engineering group project: Threat-monitoring dashboard and security event visualizer.",
    categoryTags: ["Data Analysis", "Machine Learning"],
    techStack: ["Python", "Embedded Security", "Matplotlib", "ESP32", "Dashboard"],
    metrics: "Real-time Attack Telemetry | Event Log Visualization",
    githubUrl: "https://github.com/shreyamishra-sudo",
    featured: true,
    details: "Lead author for the analytics layer. Developed real-time telemetry parsers and attack-distribution dashboards visualizing honeypot intrusion attempts and Wi-Fi security audits."
  },
  {
    id: "utsav-event-app",
    title: "UTSAV – Cross-Platform Event Management App",
    shortDesc: "Flutter and Dart cross-platform mobile application for campus event discovery and vendor coordination.",
    categoryTags: ["Web Development"],
    techStack: ["Flutter", "Dart", "Firebase", "Mobile UI"],
    metrics: "Cross-Platform Mobile | Vendor Matching",
    githubUrl: "https://github.com/shreyamishra-sudo",
    featured: false,
    details: "Group project built in Flutter & Dart. Implemented event scheduling feeds, interactive vendor lookup, and recommendation algorithms."
  },
  {
    id: "metro-fasteners-catalog",
    title: "Metro Fasteners B2B Product Catalog",
    shortDesc: "Modern B2B client catalog with responsive layout and industrial unit conversion calculator.",
    categoryTags: ["Web Development"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    metrics: "Instant Search | Engineering Unit Converter",
    githubUrl: "https://github.com/shreyamishra-sudo",
    featured: false,
    details: "Freelance web build featuring dynamic component filtering, fast asset loading, and client-side unit conversions for technical industrial specs."
  }
];

export const skillsGrouped = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", size: "lg", note: "Primary language for ML modeling, Pandas data wrangling & EDA workflows." },
      { name: "SQL", size: "lg", note: "Used extensively for complex queries, joins, window functions & data extraction." },
      { name: "Java", size: "md", note: "Core computer science data structures & OOP logic." },
      { name: "C", size: "sm", note: "System fundamentals and foundational programming algorithms." },
      { name: "JavaScript", size: "md", note: "Frontend DOM manipulation and modern interactive UI scripting." },
      { name: "Dart", size: "sm", note: "Flutter mobile app logic and cross-platform UI state." }
    ]
  },
  {
    category: "Data Analysis & ML",
    skills: [
      { name: "Pandas", size: "lg", note: "Data cleaning, aggregations, and dataframe manipulation on 7k+ records." },
      { name: "NumPy", size: "md", note: "Vectorized numerical operations and matrix calculations." },
      { name: "Scikit-learn", size: "lg", note: "Building predictive ML pipelines: Logistic Regression, Decision Trees, Random Forest." },
      { name: "EDA", size: "lg", note: "Exploratory Data Analysis: statistical distributions, correlation matrices, outlier detection." },
      { name: "Feature Engineering", size: "md", note: "Encoding categorical variables, feature scaling, and selection." },
      { name: "Statistical Analysis", size: "md", note: "Hypothesis testing, probability distribution, and trend estimation." }
    ]
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Power BI", size: "lg", note: "Built 2 major interactive dashboard suites featuring churn KPIs and risk scoring." },
      { name: "Tableau", size: "lg", note: "Developed retail sales dashboard with drill-down filters and regional performance charts." },
      { name: "Matplotlib", size: "md", note: "Custom plotting for time-series decomposition and statistical distributions." },
      { name: "Seaborn", size: "md", note: "Advanced statistical heatmaps, pairplots, and distribution charts." }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MySQL", size: "md", note: "Relational database schema querying and data management." },
      { name: "PostgreSQL", size: "md", note: "Analytical SQL queries and dataset staging." },
      { name: "Git", size: "md", note: "Version control, branching strategy, and code tracking." },
      { name: "GitHub", size: "md", note: "Open-source project hosting and collaborative development." },
      { name: "Jupyter Notebook", size: "lg", note: "Iterative data science experimentation and documentation." }
    ]
  },
  {
    category: "Web & Development",
    skills: [
      { name: "React", size: "md", note: "Building responsive component-driven BI web applications." },
      { name: "HTML5 / CSS3", size: "sm", note: "Semantic structure and modern CSS layout styling." },
      { name: "Tailwind CSS", size: "md", note: "Utility-first design systems and dark/light theme tokens." },
      { name: "Flutter", size: "sm", note: "Cross-platform mobile UI development for event applications." }
    ]
  }
];

export const certifications = [
  {
    title: "Google Cloud Data Analytics",
    issuer: "Google Cloud",
    badge: "Cloud Analytics",
    date: "2025",
    desc: "Cloud-native data warehouse querying, BigQuery analytics, and visualization workflows."
  },
  {
    title: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle",
    badge: "OCI Certified",
    date: "2025",
    desc: "Machine learning model deployment, automated ML, and OCI data science pipelines."
  },
  {
    title: "Data Analytics Virtual Simulation",
    issuer: "Deloitte Australia",
    badge: "Virtual Internship",
    date: "2025",
    desc: "Client dataset investigation, business insight communication, and data transformation."
  },
  {
    title: "Infosys Springboard R Programming & Statistics",
    issuer: "Infosys",
    badge: "Statistical Computing",
    date: "2024",
    desc: "Statistical analysis, hypothesis testing, and data visualization using R."
  },
  {
    title: "Infosys Springboard Data Science Fundamentals",
    issuer: "Infosys",
    badge: "Data Science",
    date: "2024",
    desc: "Core algorithms, data preprocessing, and model validation techniques."
  },
  {
    title: "Udemy Data Analyst Foundations",
    issuer: "Udemy",
    badge: "Analytics Foundation",
    date: "2024",
    desc: "Comprehensive SQL, Excel formulas, data cleaning, and BI storytelling."
  },
  {
    title: "Power BI Bootcamp",
    issuer: "Nucleus, SSCBS",
    badge: "BI Mastery",
    date: "2024",
    desc: "DAX expressions, data modeling, star schema design, and interactive dashboard publishing."
  }
];

export const achievements = [
  {
    title: "Global Rank 5,197",
    event: "TCS CodeVita Season 13",
    highlight: "Top Global Percentile",
    desc: "Competed globally among tens of thousands of programmers solving complex algorithmic problems."
  },
  {
    title: "Runner-up",
    event: "Hack 'n Seek Hackathon",
    highlight: "2nd Place",
    desc: "Developed an innovative data solution under tight deadline constraints."
  },
  {
    title: "Runner-up",
    event: "Forge Quest Hackathon",
    highlight: "2nd Place",
    desc: "Recognized for creative analytical problem solving and functional prototype presentation."
  },
  {
    title: "Top 15 Finalist",
    event: "Prompt Wars",
    highlight: "Finalist",
    desc: "Optimized LLM prompts and automated workflow tasks in competitive AI prompts challenge."
  },
  {
    title: "Top 15 Finalist",
    event: "Tech Triad",
    highlight: "Finalist",
    desc: "Excelled across multi-stage technical quizzes and coding assessments."
  },
  {
    title: "Student Member Coordinator",
    event: "Coders Club",
    highlight: "Leadership",
    desc: "Organized technical workshops, coding contests, and peer learning sessions."
  }
];

export const mapLocations = [
  {
    id: "kolkata",
    name: "Kolkata, West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    role: "Home Base & Freelance Web Development",
    details: "Primary residence. Developed the Metro Fasteners B2B web catalog and completed remote internships.",
    linkSection: "experience"
  },
  {
    id: "mangalore",
    name: "Mangalore, Karnataka",
    lat: 12.9141,
    lng: 74.8560,
    role: "University & Final Year Capstone Project",
    details: "Computer Science Engineering degree. Designed the ESP32 Wi-Fi Security Auditor Analytics layer.",
    linkSection: "projects"
  },
  {
    id: "remote",
    name: "Remote Internship Hubs",
    lat: 28.6139,
    lng: 77.2090,
    role: "Data Analyst & Science Internships",
    details: "LazyStudents.in (Product Analytics & QA) and EduLinkUp (EDA & Python Data Pipelines).",
    linkSection: "experience"
  }
];

export const defaultAnalyticsData = [
  { day: "Mon", pageViews: 142, uniqueVisitors: 98, projectClicks: 45 },
  { day: "Tue", pageViews: 189, uniqueVisitors: 124, projectClicks: 62 },
  { day: "Wed", pageViews: 245, uniqueVisitors: 160, projectClicks: 88 },
  { day: "Thu", pageViews: 210, uniqueVisitors: 145, projectClicks: 71 },
  { day: "Fri", pageViews: 310, uniqueVisitors: 215, projectClicks: 112 },
  { day: "Sat", pageViews: 280, uniqueVisitors: 190, projectClicks: 95 },
  { day: "Sun", pageViews: 365, uniqueVisitors: 248, projectClicks: 134 }
];
