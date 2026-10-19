# 📊 Modern Data Analyst Portfolio Website (Fresher / B.Tech Edition)

A premium, recruiter-optimized, fully responsive **Data Analyst Portfolio Website** built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. 

Designed specifically for an entry-level candidate / B.Tech graduate looking for **Data Analyst**, **Power BI Developer**, **SQL**, and **Business Intelligence** roles.

---

## 🌟 Key Features

- **Recruiter-Friendly Presentation:** Highlights analytical thinking, SQL proficiency, Power BI dashboard expertise, and data-driven storytelling without claiming unearned experience.
- **Interactive Live In-Browser Editor (Edit Mode):** A dedicated customizer button (`✏️ Edit Mode` / `Edit Biodata`) right on the website that lets you fill in your personal biodata, college info, project links, and skills live with real-time preview!
- **One-Click Config Download:** Export your changes directly as an updated `portfolioData.js` file with a single click.
- **5 Pre-configured Project Templates:**
  1. *Sales Performance Analysis Dashboard* (Power BI, Excel, SQL)
  2. *Customer Behavior & Sales Analysis* (Python, Pandas, Seaborn)
  3. *SQL Business Data Analysis & Query Optimization* (PostgreSQL, CTEs, Window Functions)
  4. *Excel Interactive Business Dashboard* (Advanced Excel, PivotTables, Dynamic Arrays)
  5. *HR Analytics & Workforce Attrition Dashboard* (Power BI, DAX, Excel)
- **Interactive Case Study Modals:** Each project has a "View Details" popup outlining Business Problem, Methodology, Key Insights, and Impact.
- **Dedicated Dashboard Showcase:** High-impact showcase for Power BI Service and Excel dynamic models with interactive metrics.
- **Dark Navy Executive Theme:** High-contrast palette (`#070b14`, `#0f172a`, `#1e293b`) with Electric Cyan (`#38bdf8`) and Mint Teal (`#2dd4bf`) accents, grid patterns, and glassmorphism.
- **Resume Integration:** Instant PDF download and in-browser preview modal.
- **Working Contact Section:** Contact cards + interactive contact form with direct mailto fallback or Formspree integration.

---

## 📁 Project Folder Structure

```text
data-analyst-portfolio/
├── public/
│   ├── images/
│   │   ├── profile-placeholder.svg    # Default high-tech analyst avatar
│   │   ├── profile.jpg                # ✏️ Place your actual photo here!
│   │   ├── sales-dashboard.svg        # Power BI Sales mockup
│   │   ├── customer-dashboard.svg     # Python RFM mockup
│   │   ├── sql-analysis.svg           # SQL Query mockup
│   │   ├── excel-dashboard.svg        # Excel Dashboard mockup
│   │   └── hr-dashboard.svg           # HR Analytics mockup
│   └── resume.pdf                     # ✏️ Place your actual Resume PDF here!
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Sticky nav, mobile menu & edit trigger
│   │   ├── Hero.jsx                   # First screen, status badge, photo card & KPIs
│   │   ├── About.jsx                  # Fresher B.Tech narrative & 4 analytical pillars
│   │   ├── Skills.jsx                 # Filterable tech skills with progress indicators
│   │   ├── Projects.jsx               # 5 featured project cards with filters
│   │   ├── ProjectModal.jsx           # In-depth case study popup
│   │   ├── DashboardShowcase.jsx      # Dedicated BI dashboard showcase section
│   │   ├── Education.jsx              # Timeline: B.Tech, University & Coursework
│   │   ├── Certifications.jsx         # Optional credentials section (hides if empty)
│   │   ├── ResumeSection.jsx          # Download & in-browser preview modal
│   │   ├── Contact.jsx                # Contact cards & interactive validation form
│   │   ├── Footer.jsx                 # Copyright, socials & smooth back-to-top
│   │   ├── EditDrawer.jsx             # 🛠️ In-Browser Live Biodata Customizer Modal
│   │   └── NotificationToast.jsx      # Toast alert system
│   ├── data/
│   │   └── portfolioData.js           # 🌟 MASTER CONFIG FILE (Edit everything here)
│   ├── App.jsx                        # Master layout & state management
│   ├── index.css                      # Tailwind styling & dark navy utilities
│   └── main.jsx                       # React entry point
├── index.html                         # SEO metadata & Google Fonts
├── package.json                       # Dependencies & scripts
├── tailwind.config.js                 # Navy palette & typography settings
├── vite.config.js                     # Vite build configuration
└── README.md                          # Documentation & Deployment guide
```

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 16 or newer).

### 1. Open Terminal & Navigate to Project Directory
```bash
cd "C:\Users\Dell\.gemini\antigravity\scratch\data-analyst-portfolio"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Your Browser
Open your browser and navigate to:
```text
http://localhost:3000
```

---

## 🛠️ How to Customize Your Biodata & Information

You have **two easy ways** to update all information:

### Method 1: Using the Live In-Browser Editor (Recommended & Easiest)
1. Run the website locally (`npm run dev`).
2. Click the floating **"✏️ Edit Mode"** button at the bottom-left or the **"Edit Biodata"** button in the navbar.
3. A slide-over panel will appear with tabs:
   - **1. Personal & Links:** Enter your Full Name, Title, Location, Email, Phone, LinkedIn, GitHub.
   - **2. Hero & About:** Customize your headline, fresher narrative, and bio.
   - **3. Education:** Enter your College Name, Branch, and Graduation Year.
   - **4. Skills:** Adjust proficiency sliders for your core skills.
   - **5. Projects:** Update project titles, dashboard links, and GitHub repositories.
4. Changes update **live on screen instantly**!
5. When satisfied, click **"Download Updated portfolioData.js"**.
6. Replace `src/data/portfolioData.js` with the downloaded file. That's it!

---

### Method 2: Editing `src/data/portfolioData.js` Directly
All data is centralized in `src/data/portfolioData.js`. Open this file in your code editor and look for the `✏️ EDIT` comments:

```javascript
export const initialPortfolioData = {
  personal: {
    fullName: "Aman Sharma", // ✏️ Replace with your Name
    professionalTitle: "Data Analyst | Power BI Developer | SQL | Python | Advanced Excel",
    location: "Bengaluru, India", // ✏️ Replace with your City
    email: "aman.dataanalyst@example.com", // ✏️ Replace with your Email
    phone: "+91 98765 43210", // ✏️ Replace with your Phone
    linkedin: "https://linkedin.com/in/your-profile", // ✏️ Replace with your LinkedIn
    github: "https://github.com/your-username", // ✏️ Replace with your GitHub
    resumeUrl: "/resume.pdf",
    profileImage: "/images/profile.jpg"
  },
  ...
}
```

---

## 📸 How to Replace the Profile Photo

1. Prepare a clear, professional portrait photo of yourself.
2. Rename your image to: `profile.jpg`
3. Paste it inside the folder: `public/images/profile.jpg`
4. In `src/data/portfolioData.js`, ensure `profileImage` is set to:
   ```javascript
   profileImage: "/images/profile.jpg"
   ```
*(Note: If no custom photo is added yet, the website automatically displays the sleek built-in Data Analyst vector avatar with zero broken image links.)*

---

## 📊 How to Add Dashboard Screenshots & Links

1. Take screenshots of your Power BI reports or Excel dashboards.
2. Save your images inside `public/images/`, for example:
   - `public/images/my-sales-dashboard.png`
   - `public/images/my-hr-report.png`
3. Open `src/data/portfolioData.js` and update the `image` and `dashboardUrl` properties:
   ```javascript
   {
     id: "sales-performance",
     title: "My Power BI Sales Dashboard",
     image: "/images/my-sales-dashboard.png",
     dashboardUrl: "https://app.powerbi.com/view?r=YOUR_EMBED_LINK",
     githubUrl: "https://github.com/your-username/my-sales-analysis",
     ...
   }
   ```

---

## 📄 How to Add Your Resume PDF

1. Export your resume as a PDF.
2. Rename the file to: `resume.pdf`
3. Place it in the `public/` directory:
   ```text
   public/resume.pdf
   ```
4. Both the **"Download Resume"** and **"View Resume"** buttons will automatically serve this document.

---

## 🌐 How to Deploy for Free (Vercel & Netlify)

### Option A: Deploy on Vercel (Fastest & 1-Click)
1. Push your code to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "My Data Analyst Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/data-analyst-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and log in with GitHub.
3. Click **"Add New Project"** and select your `data-analyst-portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.
6. Within 1 minute, you will receive a free live HTTPS URL (e.g. `https://your-name-portfolio.vercel.app`)!

---

### Option B: Deploy on Netlify
1. Log in to [netlify.com](https://netlify.com/).
2. Select **"Import an existing project from GitHub"**.
3. Select your repository.
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

---

## 📬 Contact Form Configuration (Optional Backend)

The contact form includes two modes:
1. **Default Mode (No Backend Needed):** Submitting the form opens the user's default email client with a pre-filled message draft addressed to your email.
2. **Automated Inbox Delivery via Formspree (Free):**
   - Create a free account at [formspree.io](https://formspree.io/).
   - Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xgejklmn`).
   - Open `src/data/portfolioData.js` and paste your endpoint into `contact.formspreeEndpoint`:
     ```javascript
     contact: {
       ...
       formspreeEndpoint: "https://formspree.io/f/xgejklmn"
     }
     ```
   - Now, recruiter inquiries will be delivered directly to your inbox with zero server code!
