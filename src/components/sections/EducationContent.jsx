import iiitdLogo from "../../assets/iiitdLogo.jpg";
import msitLogo from "../../assets/msitLogo.jpg";
import banyanLogo from "../../assets/banyanTreeLogo.jpg";

function EducationCard({ logo, institute, location, degree, duration, highlights = [] }) {
  return (
    <div className="relative pl-6 border-l-4 border-[#766d3b] flex gap-8 items-center">
      {/* Logo with hover effect */}
      <img
        src={logo}
        alt={`${institute} Logo`}
        className="w-20 h-20 object-contain mt-1 rounded-md
                   transform transition-transform duration-300 ease-in-out 
                   hover:scale-150"
        title={institute}
      />

      {/* Details */}
      <div>
        <h3 className="text-2xl font-bold text-[#dfb16d] leading-tight">
          {institute}
        </h3>
        <p className="text-lg font-medium mt-1">{location}</p>
        <p className="text-lg font-medium mt-1">{degree}</p>
        <p className="text-sm mt-1 mb-2 text-gray-400">{duration}</p>
        <ul className="space-y-1 text-sm text-gray-300 list-disc list-inside">
          {highlights.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-16 mt-16">
      <EducationCard
        logo={iiitdLogo}
        institute="Indraprastha Institute of Information Technology, Delhi"
        location="New Delhi, India"
        degree="Master of Technology (M.Tech), Computer Science Engineering"
        duration="2023 – 2025"
        highlights={["CGPA: 7.74"]}
      />

      <EducationCard
        logo={msitLogo}
        institute="Maharaja Surajmal Institute of Technology, GGSIPU"
        location="New Delhi, India"
        degree="Bachelor of Technology (B.Tech), Computer Science Engineering"
        duration="2018 – 2022"
        highlights={["CGPA: 8.34"]}
      />

      <EducationCard
        logo={banyanLogo}
        institute="Banyan Tree School, Lodhi Road"
        location="New Delhi, India"
        degree="Secondary and Senior Secondary – CBSE"
        duration="2016 – 2018"
        highlights={["XII Percentage: 78%", "X CGPA: 9.6"]}
      />
    </div>
  );
}

export default EducationContent;