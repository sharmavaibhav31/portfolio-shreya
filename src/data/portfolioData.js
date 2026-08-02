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
    tooltip: "Maintained a consistent top-tier grade distribution across core CSE, data structure, and analytics modules.",
    sparkline: [8.8, 9.0, 9.15, 9.28, 9.36]
  },
  {
    id: "internships",
    label: "Active Internships",
    value: "2",
    subtext: "LazyStudents.in & EduLinkUp",
    icon: "Briefcase",
    trend: "Product Analytics & EDA",
    tooltip: "Handling data validation at LazyStudents.in and end-to-end preprocessing pipelines at EduLinkUp.",
    sparkline: [0, 1, 1, 2, 2]
  },
  {
    id: "records",
    label: "Records Analyzed",
    value: "7,000+",
    subtext: "Customer Churn & Retail Datasets",
    icon: "Database",
    trend: "High Precision ML",
    tooltip: "Cleaned and processed 7k+ customer churn samples and 10k+ multi-regional transaction logs.",
    sparkline: [500, 1200, 3500, 5000, 7200]
  },
  {
    id: "certifications",
    label: "Certifications",
    value: "7+",
    subtext: "Google Cloud, Oracle, Deloitte",
    icon: "CheckCircle",
    trend: "100% Verified",
    tooltip: "Completed professional courses covering Cloud Analytics, OCI Data Science, and BI star schemas.",
    sparkline: [2, 3, 5, 6, 7]
  },
  {
    id: "rank",
    label: "CodeVita Rank",
    value: "5,197",
    subtext: "TCS CodeVita Season 13 Global",
    icon: "Trophy",
    trend: "Top Percentile",
    tooltip: "Ranked globally in competitive programming, demonstrating strong algorithmic problem-solving skills.",
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
    description: "Focusing on product analytics, validation of document processing pipelines, AI comparative evaluation, and business intelligence reporting.",
    bullets: [
      "Validated data integrity across document extraction modules, identifying and logging schema-level edge cases.",
      "Designed and documented structured data dictionaries for internal product analytics tracking.",
      "Conducted comparative evaluations of AI models using defined feature matrices to determine integration viability.",
      "Collaborated on BI dashboard layouts to track monthly user retention and document execution metrics."
    ],
    skills: ["Python", "Product Analytics", "QA Testing", "AI Integration", "BI Reporting"],
    contribution: [
      { category: "Product Analytics", weight: 35 },
      { category: "Data Integrity / QA", weight: 30 },
      { category: "AI Evaluation", weight: 20 },
      { category: "Data Dictionaries", weight: 15 }
    ]
  },
  {
    id: "edulinkup",
    role: "Data Science Intern",
    company: "EduLinkUp",
    period: "February 2026 – Present",
    location: "Remote",
    type: "Internship",
    description: "Executing end-to-end data preprocessing pipelines, exploratory data profiling, and statistical visual analytics.",
    bullets: [
      "Developed automated Python preprocessing scripts to clean, structure, and profile raw customer data.",
      "Conducted detailed exploratory data analysis (EDA) to map correlation matrices and statistical distributions.",
      "Prepared data visualization layouts and descriptive analytics reports to guide product strategy."
    ],
    skills: ["Python", "Pandas", "NumPy", "Jupyter", "EDA", "Data Cleaning"],
    contribution: [
      { category: "Data Preprocessing", weight: 40 },
      { category: "Exploratory Profiling", weight: 35 },
      { category: "Python Pipeline Dev", weight: 25 }
    ]
  },
  {
    id: "metro-fasteners",
    role: "Freelance Web Developer",
    company: "Metro Fasteners",
    period: "June 2025 – August 2025",
    location: "Kolkata, India",
    type: "Freelance",
    description: "Built a responsive B2B web catalog with client-side engineering logic and metric conversion models.",
    bullets: [
      "Engineered a responsive B2B product catalog using React, TypeScript, and Tailwind CSS.",
      "Coded dynamic unit conversion algorithms for mechanical structural measurements.",
      "Optimized client-side loading times and interface layouts for multi-device compatibility."
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Web Development"],
    contribution: [
      { category: "Frontend Engineering", weight: 50 },
      { category: "Conversion Logic", weight: 30 },
      { category: "Asset Optimization", weight: 20 }
    ]
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
    shortDesc: "ML classification pipeline on 7,000+ customer records paired with an interactive risk & retention dashboard.",
    categoryTags: ["Machine Learning", "Business Intelligence"],
    techStack: ["Python", "Scikit-learn", "Pandas", "Power BI", "Random Forest"],
    metrics: "7,000+ Customer Records | 89% Model Precision",
    githubUrl: "https://github.com/shreyamishra-sudo",
    featured: true,
    details: "Built an ML pipeline comparing Logistic Regression, Decision Tree, and Random Forest models. Treated data imbalances using SMOTE, engineered customer risk profiles, and exported output tables into a Power BI tracking suite.",
    etl: {
      extract: {
        stage: "EXTRACT",
        desc: "Ingested 7,043 raw customer profiles (demographics, charges, tenure) from staging SQL database."
      },
      transform: {
        stage: "TRANSFORM",
        desc: "Addressed multicollinearity, imputed missing values, applied SMOTE scaling, and extracted features."
      },
      load: {
        stage: "LOAD",
        desc: "Wired predicted churn scores to Power BI, creating active risk segments and retention KPI matrix."
      }
    },
    impact: {
      label: "Model Precision",
      value: "89%",
      context: "Random Forest model selected based on superior F1 score and high precision."
    },
    modelComparison: [
      { model: "Logistic Regression", precision: 81, recall: 76, f1: 78 },
      { model: "Decision Tree", precision: 84, recall: 82, f1: 83 },
      { model: "Random Forest", precision: 89, recall: 86, f1: 87 }
    ]
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
    details: "Conducted deep-dive SQL queries across retail sales records, determining top revenue categories, customer purchasing frequency, and regional margins. Visualized findings in an interactive Tableau dashboard.",
    etl: {
      extract: {
        stage: "EXTRACT",
        desc: "Extracted 10,000+ transaction records from PostgreSQL relational regional schema databases."
      },
      transform: {
        stage: "TRANSFORM",
        desc: "Aggregated monthly margins and regional metrics using complex SQL window functions and joins."
      },
      load: {
        stage: "LOAD",
        desc: "Created 8 interactive regional drill-down dashboard charts in Tableau for executive tracking."
      }
    },
    impact: {
      label: "Dashboard Scope",
      value: "8 KPIs, 3 Regions",
      context: "Fully query-filterable interface across regional markets."
    }
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
    details: "Cleaned raw transaction datasets, handled missing values, performed time-series decomposition, and visualized category correlation matrices to assist marketing strategy.",
    impact: {
      label: "Dataset Size",
      value: "1,000 Records",
      context: "Completed temporal trend profiling and seasonal pattern mapping."
    }
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
    details: "Lead author for the analytics layer. Developed real-time telemetry parsers and attack-distribution dashboards visualizing honeypot intrusion attempts and Wi-Fi security audits.",
    impact: {
      label: "Log Telemetry",
      value: "200+ Attack Logs",
      context: "Parsed syslog telemetry formats into dynamic threat level distributions."
    }
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
