import iiitdLogo from "../../assets/iiitdLogo.jpg";
import msitLogo from "../../assets/msitLogo.jpg";
import banyanLogo from "../../assets/banyanTreeLogo.jpg";

function EducationCard({ dark = true, logo, institute, location, degree, duration, highlights = [] }) {
  return (
    <div
      className={`
        flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-4 md:pl-6 rounded-xl shadow-md
        ${dark ? "bg-[#1f2937] text-white" : "bg-white text-black"}
        ${dark ? "md:border-l-4 md:border-[#766d3b]" : "md:border-l-4 md:border-[#dfb16d]"}
      `}
    >
      {/* Logo */}
      <div className="flex-shrink-0 flex justify-center md:block">
        <img
          src={logo}
          alt={`${institute} Logo`}
          className="w-20 h-20 object-contain rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
          title={institute}
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className={`text-xl md:text-2xl font-bold leading-tight ${dark ? "text-[#dfb16d]" : "text-[#766d3b]"}`}>
          {institute}
        </h3>
        <p className="text-base font-medium mt-1">{location}</p>
        <p className="text-base font-medium mt-1">{degree}</p>
        <p className={`text-sm mt-1 mb-2 ${dark ? "text-gray-400" : "text-gray-800"}`}>{duration}</p>
        <ul className={`space-y-1 text-sm ${dark ? "text-gray-300" : "text-gray-700"} list-disc list-inside`}>
          {highlights.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationContent({ darkMode }) {
  return (
    <div className="space-y-16 mt-4 py-8">
      <div className="w-full max-w-3xl ml-0">
        <EducationCard
          dark={darkMode}
          logo={iiitdLogo}
          institute="Indraprastha Institute of Information Technology, Delhi"
          location="New Delhi, India"
          degree="Master of Technology (M.Tech), Computer Science Engineering"
          duration="2023 – 2025"
          highlights={["CGPA: 7.74"]}
        />
      </div>

      <div className="w-full max-w-3xl ml-0">
        <EducationCard
          dark={darkMode}
          logo={msitLogo}
          institute="Maharaja Surajmal Institute of Technology, GGSIPU"
          location="New Delhi, India"
          degree="Bachelor of Technology (B.Tech), Computer Science Engineering"
          duration="2018 – 2022"
          highlights={["CGPA: 8.34"]}
        />
      </div>

      <div className="w-full max-w-3xl ml-0">
        <EducationCard
          dark={darkMode}
          logo={banyanLogo}
          institute="Banyan Tree School, Lodhi Road"
          location="New Delhi, India"
          degree="Secondary and Senior Secondary – CBSE"
          duration="2016 – 2018"
          highlights={["XII Percentage: 78%", "X CGPA: 9.6"]}
        />
      </div>
    </div>
  );
}

export default EducationContent;