/**
 * =========================================================================
 * 📊 PORTFOLIO CONFIGURATION DATA (EDITABLE PLACEHOLDERS)
 * =========================================================================
 * You can edit all your personal information, projects, skills, and links here.
 * You can also use the in-browser "🛠️ Customize Portfolio / Edit Mode" button 
 * on the website to change these live and download an updated copy of this file!
 */

export const initialPortfolioData = {
  // ==========================================
  // 1. PERSONAL INFORMATION & BIODATA
  // ==========================================
  personal: {
    fullName: "Aman Sharma", // ✏️ EDIT: Replace with your Full Name (e.g. "Rahul Verma")
    professionalTitle: "Data Analyst | Power BI Developer | SQL | Python | Advanced Excel",
    location: "Bengaluru, India", // ✏️ EDIT: Replace with your city (e.g. "Delhi NCR, India", "Pune, India")
    email: "aman.dataanalyst@example.com", // ✏️ EDIT: Replace with your real email
    phone: "+91 98765 43210", // ✏️ EDIT: Replace with your phone number
    linkedin: "https://linkedin.com/in/your-profile", // ✏️ EDIT: Replace with your LinkedIn profile URL
    github: "https://github.com/your-username", // ✏️ EDIT: Replace with your GitHub profile URL
    resumeUrl: "/resume.pdf", // ✏️ Put your resume file named 'resume.pdf' in the /public folder
    
    // Profile Photo:
    // Place your picture in the 'public/images/' folder as 'profile.jpg'
    // Default uses the high-tech data analyst avatar placeholder:
    profileImage: "/images/profile-placeholder.svg", 
    
    // Recruiter status banner
    statusBadge: "Actively Looking for Data Analyst Opportunities | Immediate Joiner",
    yearsExperience: "Fresher (B.Tech Graduate)",
  },

  // ==========================================
  // 2. HERO SECTION
  // ==========================================
  hero: {
    headline: "Turning Data Into Decisions.",
    subheadline: "I'm a Data Analyst passionate about transforming raw data into actionable insights through data analysis, interactive dashboards, and data-driven storytelling.",
    primaryButtonText: "View My Projects",
    secondaryButtonText: "Download Resume",
    contactButtonText: "Contact Me",
    
    // Quick KPI badges shown in the hero section
    metrics: [
      { label: "Data Projects", value: "5+" },
      { label: "Dashboards Built", value: "8+" },
      { label: "SQL & Python Code", value: "100%" },
      { label: "B.Tech Graduate", value: "2024" }
    ]
  },

  // ==========================================
  // 3. ABOUT ME SECTION
  // ==========================================
  about: {
    title: "About Me",
    subtitle: "Turning Complex Datasets into Meaningful Business Intelligence",
    
    // Authentic Fresher Narrative
    introduction: "I recently completed my Bachelor of Technology (B.Tech) degree and have dedicated myself to mastering the modern data analytics stack. I specialize in bridging the gap between raw, messy data and executive decision-making.",
    
    detailedBio: "Through rigorous hands-on projects, I have developed strong expertise in exploratory data analysis (EDA), data cleaning, relational database querying with SQL, statistical modeling in Python, and crafting dynamic business intelligence dashboards in Power BI and Advanced Excel. I thrive on identifying hidden trends, answering critical business questions, and translating complex metrics into intuitive visual stories.",
    
    // 4 Key Pillars of analytical expertise
    corePillars: [
      {
        id: "analytical-thinking",
        title: "Analytical Thinking & Problem Solving",
        description: "Breaking down high-level business problems into quantitative questions and actionable hypotheses."
      },
      {
        id: "data-cleaning",
        title: "Data Cleaning & Preprocessing",
        description: "Handling missing values, anomalies, duplicates, and structuring raw datasets for reliable downstream modeling."
      },
      {
        id: "eda-insights",
        title: "Exploratory Data Analysis (EDA)",
        description: "Uncovering correlations, distributions, patterns, and outliers using Python (Pandas, Seaborn) and SQL."
      },
      {
        id: "bi-dashboards",
        title: "BI Dashboards & Reporting",
        description: "Building responsive, executive-ready Power BI & Excel dashboards with automated DAX formulas and interactive slicers."
      }
    ]
  },

  // ==========================================
  // 4. TECHNICAL SKILLS SECTION
  // ==========================================
  skills: [
    {
      category: "Data Analysis",
      iconName: "BarChart3",
      description: "Extracting meaningful patterns and diagnostic business metrics from raw tabular data.",
      items: [
        { name: "Advanced Excel", level: 90 },
        { name: "Data Cleaning & Preprocessing", level: 92 },
        { name: "Data Transformation", level: 88 },
        { name: "Exploratory Data Analysis (EDA)", level: 90 },
        { name: "KPI & Variance Analysis", level: 85 }
      ]
    },
    {
      category: "Business Intelligence",
      iconName: "PieChart",
      description: "Designing dynamic visual experiences and enterprise-grade KPI scorecards.",
      items: [
        { name: "Power BI Desktop & Service", level: 90 },
        { name: "DAX (Data Analysis Expressions)", level: 82 },
        { name: "Power Query (M Language / ETL)", level: 88 },
        { name: "Data Modeling (Star Schema)", level: 85 },
        { name: "Interactive Visualizations", level: 92 }
      ]
    },
    {
      category: "Databases & SQL",
      iconName: "Database",
      description: "Querying relational databases, complex joins, and advanced analytical calculations.",
      items: [
        { name: "SQL (MySQL / PostgreSQL / MS SQL)", level: 90 },
        { name: "Joins, Subqueries & Unions", level: 94 },
        { name: "Window Functions (RANK, DENSE_RANK)", level: 84 },
        { name: "Common Table Expressions (CTEs)", level: 88 },
        { name: "Aggregations & Group By Filters", level: 92 }
      ]
    },
    {
      category: "Programming & Libraries",
      iconName: "Code2",
      description: "Scripting automated data pipelines, statistical explorations, and visualization charts.",
      items: [
        { name: "Python", level: 85 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 84 },
        { name: "Matplotlib & Seaborn", level: 86 },
        { name: "Jupyter Notebooks", level: 90 }
      ]
    },
    {
      category: "Other Skills & Tools",
      iconName: "TrendingUp",
      description: "Productivity, reporting automation, and stakeholder presentation.",
      items: [
        { name: "PivotTables & Dynamic Arrays", level: 95 },
        { name: "XLOOKUP & Nested Formulas", level: 92 },
        { name: "Interactive Slicers & Timelines", level: 90 },
        { name: "Data Storytelling & Presentations", level: 88 },
        { name: "Git & Version Control", level: 80 }
      ]
    }
  ],

  // ==========================================
  // 5. FEATURED PROJECTS SECTION (Editable Templates)
  // ==========================================
  projects: [
    {
      id: "sales-performance",
      title: "Sales Performance Analysis Dashboard",
      category: "Power BI",
      tools: ["Power BI", "Excel", "SQL", "DAX"],
      shortDescription: "An end-to-end interactive Power BI dashboard tracking revenue, profit margins, regional sales growth, and top-selling product categories across 4 business quarters.",
      fullDescription: "Built an executive sales intelligence dashboard analyzing over 50,000+ sales transactions. Formulated dynamic DAX measures for Year-over-Year (YoY) growth, Profit Margin %, and Moving Averages. Designed drill-through pages for regional managers to inspect individual store performance and identify underperforming product categories.",
      image: "/images/sales-dashboard.svg", // ✏️ Replace with your screenshot in public/images/
      kpis: [
        { label: "Total Revenue", value: "₹4.8M" },
        { label: "Profit Margin", value: "24.6%" },
        { label: "YoY Growth", value: "+18.2%" },
        { label: "Transactions", value: "52K+" }
      ],
      dashboardUrl: "https://app.powerbi.com/", // ✏️ Replace with your live Power BI or Public link
      githubUrl: "https://github.com/your-username/sales-performance-analysis",
      details: {
        problem: "Sales leadership lacked real-time visibility into regional sales fluctuations and product category profitability, relying on slow, manual monthly spreadsheets.",
        approach: "Extracted transactional data with SQL, performed ETL cleansing in Power Query, built a Star Schema data model, and authored 15+ DAX calculated measures.",
        keyInsights: [
          "Identified that the 'Technology' category contributed 48% of total profit despite representing only 32% of total order volume.",
          "Discovered that the Southern Region had a 14% drop in Q3 due to supply chain delays in high-margin accessories.",
          "Created an automated discount threshold alert to prevent negative profit margin sales."
        ],
        businessImpact: "Reduced executive reporting turnaround time from 3 days to instantaneous automated updates, empowering weekly pricing adjustments."
      }
    },
    {
      id: "customer-behavior",
      title: "Customer Behavior and Sales Analysis",
      category: "Python",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      shortDescription: "In-depth exploratory data analysis (EDA) segmenting customers by purchasing patterns, repeat transaction frequency, and retention churn drivers.",
      fullDescription: "Analyzed consumer purchasing trends across 100,000 retail records. Preprocessed missing values, removed outliers using IQR statistical techniques, and built RFM (Recency, Frequency, Monetary) segmentation to group customers into actionable cohorts like Champions, At-Risk, and Dormant.",
      image: "/images/customer-dashboard.svg", // ✏️ Replace with your screenshot in public/images/
      kpis: [
        { label: "Customer Base", value: "12,400" },
        { label: "Repeat Rate", value: "38.5%" },
        { label: "Avg Order Value", value: "₹1,850" },
        { label: "Identified Churn Risk", value: "21%" }
      ],
      dashboardUrl: "https://github.com/your-username/customer-behavior-analysis/blob/main/Customer_Analysis.ipynb",
      githubUrl: "https://github.com/your-username/customer-behavior-analysis",
      details: {
        problem: "Marketing team was spending equal ad spend across all customer segments without understanding customer lifetime value or churn risk indicators.",
        approach: "Employed Python Pandas for cohort analysis, calculated customer RFM scores, and rendered distribution heatmaps with Seaborn to isolate high-value user behaviors.",
        keyInsights: [
          "Top 15% of high-RFM customers generated 62% of overall annual revenue.",
          "Customers who didn't repurchase within 60 days had a 75% probability of permanently churning.",
          "Weekend mobile app purchases had an average basket size 22% higher than weekday desktop orders."
        ],
        businessImpact: "Enabled the marketing team to launch targeted retention campaigns focusing on the 60-day threshold, projected to recover 12% in at-risk sales."
      }
    },
    {
      id: "sql-business-analysis",
      title: "SQL Business Data Analysis & Query Optimization",
      category: "SQL",
      tools: ["PostgreSQL", "SQL", "CTEs", "Window Functions"],
      shortDescription: "Complex relational database analysis demonstrating multi-table joins, recursive CTEs, and window functions to answer critical business queries.",
      fullDescription: "Structured and executed 30+ sophisticated SQL queries to analyze inventory turnover, employee sales performance, and running cumulative revenues. Utilized advanced Window Functions (RANK, DENSE_RANK, LEAD, LAG) to analyze month-over-month performance trends without slow nested loops.",
      image: "/images/sql-analysis.svg", // ✏️ Replace with your screenshot in public/images/
      kpis: [
        { label: "Queries Formulated", value: "30+" },
        { label: "Tables Joined", value: "8 Tables" },
        { label: "Query Speed Gain", value: "40%" },
        { label: "Data Accuracy", value: "100%" }
      ],
      dashboardUrl: "https://github.com/your-username/sql-business-analysis",
      githubUrl: "https://github.com/your-username/sql-business-analysis",
      details: {
        problem: "The operations team needed fast answers to complex multi-dimensional questions regarding product restock urgency and rolling 30-day customer velocity.",
        approach: "Wrote modular queries using Common Table Expressions (CTEs), parameterized views, indexing strategies, and analytical partition functions.",
        keyInsights: [
          "Calculated moving 7-day average sales to smooth out weekend spikes and predict reorder dates accurately.",
          "Ranked top 3 performing sales reps per division while filtering out non-commissionable returns.",
          "Identified ghost inventory items that had zero sales in 180+ days, tying up working capital."
        ],
        businessImpact: "Demonstrated production-grade SQL proficiency capable of extracting rapid intelligence directly from enterprise relational schemas."
      }
    },
    {
      id: "excel-interactive-dashboard",
      title: "Excel Interactive Business Dashboard",
      category: "Excel",
      tools: ["Advanced Excel", "PivotTables", "Slicers", "XLOOKUP", "Charts"],
      shortDescription: "A dynamic, fully interactive financial & operations dashboard built in Excel featuring interactive slicers, KPI summary cards, and dynamic charting.",
      fullDescription: "Engineered an automated Excel reporting system eliminating manual copy-pasting. Integrated multi-criteria dynamic arrays (FILTER, UNIQUE, SORT), PivotTables connected via a single timeline slicer, and conditional formatting rules to highlight KPI targets and budget variances instantly.",
      image: "/images/excel-dashboard.svg", // ✏️ Replace with your screenshot in public/images/
      kpis: [
        { label: "Manual Hours Saved", value: "12 hrs/wk" },
        { label: "Formulas Automated", value: "45+" },
        { label: "Interactive Slicers", value: "6" },
        { label: "Budget Variance", value: "±2.1%" }
      ],
      dashboardUrl: "https://github.com/your-username/excel-interactive-dashboard",
      githubUrl: "https://github.com/your-username/excel-interactive-dashboard",
      details: {
        problem: "Operations managers relied on scattered, static spreadsheets with outdated numbers that required hours of manual recalculation every Monday.",
        approach: "Consolidated raw source sheets into structured Excel tables, implemented XLOOKUP pipelines, and designed a clean executive summary dashboard tab with interactive slicers.",
        keyInsights: [
          "Automated monthly budget vs. actual variance calculation with instant color-coded status flags.",
          "Provided one-click department filtering without exposing backend calculation worksheets.",
          "Built a dynamic waterfall chart showing cost breakdown from gross revenue down to net EBITDA."
        ],
        businessImpact: "Reduced weekly management reporting preparation from 12 hours down to a single 10-second data refresh."
      }
    },
    {
      id: "hr-analytics-dashboard",
      title: "HR Analytics & Workforce Attrition Dashboard",
      category: "Power BI",
      tools: ["Power BI", "SQL", "Excel", "DAX"],
      shortDescription: "A comprehensive human capital dashboard analyzing employee headcount, attrition rates, job satisfaction scores, and salary equity across departments.",
      fullDescription: "Developed an HR diagnostic tool tracking key workforce metrics across 1,500+ employee records. Visualized employee tenure distributions, attrition triggers by department, overtime impact on voluntary exits, and performance rating correlations.",
      image: "/images/hr-dashboard.svg", // ✏️ Replace with your screenshot in public/images/
      kpis: [
        { label: "Total Headcount", value: "1,470" },
        { label: "Attrition Rate", value: "16.1%" },
        { label: "Avg Monthly Income", value: "₹65K" },
        { label: "Avg Satisfaction", value: "3.8 / 5" }
      ],
      dashboardUrl: "https://app.powerbi.com/",
      githubUrl: "https://github.com/your-username/hr-analytics-dashboard",
      details: {
        problem: "HR leadership experienced an unexpected spike in voluntary resignations among junior-to-mid level roles and needed data-backed root cause analysis.",
        approach: "Cleaned demographic and compensation datasets, established an attrition risk scoring model, and designed an intuitive Power BI dashboard with department-wise drilldowns.",
        keyInsights: [
          "Employees working frequent overtime had an attrition rate of 31%, compared to only 10% for non-overtime staff.",
          "The R&D and Sales departments accounted for 64% of total resignations, with salary stagnation beyond 3 years being the primary driver.",
          "High performers who received recent stock options exhibited 4x higher retention rates."
        ],
        businessImpact: "Provided actionable insights for HR to restructure compensation bands and introduce overtime caps, aiming to reduce junior turnover by 20%."
      }
    }
  ],

  // ==========================================
  // 6. DASHBOARD SHOWCASE (Detailed Highlights)
  // ==========================================
  dashboardShowcase: [
    {
      id: "dash-powerbi-sales",
      title: "Executive Sales & Revenue Intelligence (Power BI)",
      type: "Power BI Dashboard",
      previewImage: "/images/sales-dashboard.svg",
      problem: "Fragmented visibility across multi-region distribution channels and product line margins.",
      solution: "Created an automated BI pipeline connecting SQL extracts to an interactive dashboard with time-intelligence DAX formulas.",
      keyMetrics: ["Revenue: ₹4.8M", "Profit: 24.6%", "Transactions: 52K+", "Quarterly Gain: +18.2%"],
      tools: ["Power BI Desktop", "DAX", "Power Query", "SQL"],
      liveUrl: "https://app.powerbi.com/",
      repoUrl: "https://github.com/your-username/sales-performance-analysis"
    },
    {
      id: "dash-excel-ops",
      title: "Interactive Operations & Financial Tracker (Advanced Excel)",
      type: "Advanced Excel Model",
      previewImage: "/images/excel-dashboard.svg",
      problem: "Excessive manual overhead updating financial models and reconciling monthly departmental budgets.",
      solution: "Engineered dynamic array formulas, interactive slicers, and automated KPI cards with zero VBA required.",
      keyMetrics: ["12 Hours Saved/Week", "45+ Automated Formulas", "Real-Time Slicers", "100% Data Integrity"],
      tools: ["Advanced Excel", "PivotTables", "XLOOKUP", "Dynamic Charts"],
      liveUrl: "https://github.com/your-username/excel-interactive-dashboard",
      repoUrl: "https://github.com/your-username/excel-interactive-dashboard"
    }
  ],

  // ==========================================
  // 7. EDUCATION SECTION
  // ==========================================
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering / Information Technology", // ✏️ EDIT: Your branch
      institution: "Your College / University Name", // ✏️ EDIT: Replace with your actual college name
      location: "Your City, India", // ✏️ EDIT: College City
      graduationYear: "2024", // ✏️ EDIT: e.g. "2024" or "2023"
      status: "Completed Last Year",
      coursework: [
        "Database Management Systems (DBMS)",
        "Probability & Applied Statistics",
        "Object-Oriented Programming (Python)",
        "Data Structures & Algorithms",
        "Business Analytics & Data Interpretation"
      ],
      description: "Developed strong foundational training in algorithmic problem-solving, relational databases, statistical computation, and data structures. Successfully completed academic projects centered around data analysis and automated software applications."
    }
  ],

  // ==========================================
  // 8. CERTIFICATIONS & ACHIEVEMENTS (Optional & Fully Configurable)
  // Set showSection to false or clear the items if you do not have any yet!
  // ==========================================
  certificationsSection: {
    showSection: true,
    title: "Certifications & Learning Milestones",
    subtitle: "Continuous skill development and verified credentials",
    items: [
      {
        id: "cert-1",
        title: "Power BI Data Analyst Associate",
        issuer: "Microsoft / Coursera",
        issueDate: "2024",
        credentialUrl: "https://learn.microsoft.com/",
        skillsLearned: "DAX, Power Query, Data Modeling, Dashboard Design"
      },
      {
        id: "cert-2",
        title: "SQL for Data Science",
        issuer: "UC Davis / Coursera",
        issueDate: "2024",
        credentialUrl: "https://coursera.org/",
        skillsLearned: "Complex Joins, Subqueries, Aggregations, Database Schema"
      },
      {
        id: "cert-3",
        title: "Python for Data Analysis & Visualization",
        issuer: "DataCamp / Udemy",
        issueDate: "2024",
        credentialUrl: "https://udemy.com/",
        skillsLearned: "Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis"
      }
    ]
  },

  // ==========================================
  // 9. RESUME SECTION DETAILS
  // ==========================================
  resume: {
    headline: "Ready to Add Immediate Value to Your Analytics Team",
    subheadline: "Download my complete resume for a detailed view of my academic background, technical skills, and data project milestones.",
    downloadFileName: "Aman_Sharma_Data_Analyst_Resume.pdf",
    filePath: "/resume.pdf", // Must be placed inside the 'public' folder as 'resume.pdf'
    highlights: [
      "B.Tech graduate equipped with end-to-end data analytics workflow experience",
      "Hands-on expertise in SQL querying, Python (Pandas), and Power BI dashboard creation",
      "Proven capability to translate raw unstructured data into executive business insights",
      "Immediate joiner available for Full-Time, Remote, or Hybrid Data Analyst opportunities"
    ]
  },

  // ==========================================
  // 10. CONTACT SECTION DETAILS
  // ==========================================
  contact: {
    headline: "Let's Connect & Discuss Opportunities",
    subheadline: "I am actively seeking an entry-level Data Analyst role. Whether you have an open position, an analytics challenge, or just want to discuss data trends, I'd love to hear from you!",
    formspreeEndpoint: "", // ✏️ OPTIONAL: Paste your Formspree endpoint (e.g. "https://formspree.io/f/xyzaqwer") to receive form submissions directly in your email!
  }
};
