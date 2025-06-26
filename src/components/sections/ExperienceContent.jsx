import GroupedExperienceCard from "../GroupedExperienceCard";
import collegeduniaLogo from "../../assets/collegedunia.jpg";
import drdoLogo from "../../assets/drdo.jpg";
import isroLogo from "../../assets/isro.jpg";
import iiitdLogo from "../../assets/iiitdLogo.jpg";

function ExperienceCard({ logo, company, role, duration, description, tools = [] }) {
  return (
    <div className="relative pl-10 border-l-4 border-[#766d3b] flex gap-6 items-start group hover:scale-[1.01] transition-transform duration-300">
      {/* Timeline Dot with Logo */}
      <div className="absolute -left-6 top-2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-[#766d3b] flex items-center justify-center overflow-hidden shadow-md">
        <img src={logo} alt={`${company} Logo`} className="w-10 h-10 object-contain" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-[#dfb16d]">{role}</h3>
        <p className="text-base font-semibold mt-1">{company}</p>
        <p className="text-sm mt-1 mb-2 text-gray-400">{duration}</p>
        <p className="text-sm mb-3 text-gray-300 whitespace-pre-line">{description}</p>

        {/* Tools (Devicon) */}
        <div className="flex flex-wrap gap-4 mt-2">
          {tools.map((toolClass, idx) => (
            <i
              key={idx}
              className={`devicon-${toolClass} colored text-4xl`}
              title={toolClass.split("-")[0].toUpperCase()}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-20 px-8 mt-12">
      <GroupedExperienceCard
  logo={iiitdLogo}
  organization="IIIT Delhi"
  experiences={[
    {
      role: "Teaching Assistant – Mobile Computing",
      duration: "Jan 2025 – May 2025",
      description: "Conducted hands-on demos, evaluated assessments, and provided individualized guidance to students in Android app development using Java and Kotlin.",
      tools: ["java-plain", "kotlin-plain", "androidstudio-plain"],
    },
    {
      role: "Teaching Assistant – Object Oriented Programming and Design",
      duration: "Aug 2024 – Dec 2024",
      description: "Mentored students in OOP fundamentals in C++, led project demos, and evaluated exams and assignments.",
      tools: ["cplusplus-plain"],
    },
    {
      role: "Teaching Assistant – Algorithm Design and Analysis",
      duration: "Jan 2024 – May 2024",
      description: "Guided students in algorithm design and data structure implementation using C through tutorials and academic evaluation.",
      tools: ["c-plain", "cplusplus-plain"],
    },
    {
      role: "Teaching Assistant – Introduction to Programming",
      duration: "Aug 2023 – Dec 2023",
      description: "Assisted in labs, conducted tutorials and evaluation for Python programming.",
      tools: ["python-plain"],
    },
  ]}
/>
      <ExperienceCard
  logo={isroLogo}
  company="ISRO"
  role="Data Science Research Intern"
  duration="January 2022 – March 2022"
  description={`• Reviewed and implemented research papers on AI-based rainfall prediction techniques, including Artificial Neural Networks (ANN) and Adaptive Neuro-Fuzzy Inference Systems (ANFIS).\n
• Trained and evaluated various machine learning and deep learning models such as SVM, Random Forest, LSTM, ARIMA, and Facebook Prophet to forecast rainfall trends for Bihar in 2021.\n
• Conducted performance comparison of these models against traditional statistical methods to assess predictive accuracy.`}
  tools={[
    "python-plain",
    "numpy-plain",
    "pandas-plain",
    "matplotlib-plain",
    "scikitlearn-plain",
    "jupyter-plain-wordmark",
    "tensorflow-original",
  ]}
/>

<ExperienceCard
  logo={drdoLogo}
  company="DRDO"
  role="Data Science Research Intern"
  duration="January 2021 – June 2021"
  description={`• Explored and implemented advanced clustering algorithms including Gravitational K-Means and Cluster Center Initialization algorithms on multidimensional datasets.\n
• Studied and applied DBSCAN to identify and visualize seismic activity patterns across India, contributing to geospatial clustering of earthquake-prone zones.\n
• Conducted comparative analysis of clustering methods for performance and interpretability in real-world scenarios.`}
  tools={[
    "python-plain",
    "numpy-plain",
    "pandas-plain",
    "matplotlib-plain",
    "scikitlearn-plain",
    "jupyter-plain-wordmark",
  ]}
/>

      <ExperienceCard
  logo={collegeduniaLogo}
  company="CollegeDunia Pvt. Ltd."
  role="Data Science Intern"
  duration="August 2020 – November 2020"
  description={`• Built custom web scrapers using BeautifulSoup and Selenium to extract educational data from platforms like Quora and Yahoo Answers.\n• Cleaned and structured raw HTML data using Pandas and NumPy to prepare usable datasets.\n• Analyzed key metrics such as college fees, criteria, and ratings using Matplotlib for insight generation.\n• Designed and deployed interactive dashboards with Node.js and Django to visualize the extracted insights.`}
  tools={[
    "python-plain",
    "numpy-plain",
    "pandas-plain",
    "matplotlib-plain",
    "selenium-original",
    "django-plain",
    "nodejs-plain"
  ]}
/>
    </div>
  );
}

export default ExperienceContent;