export default function AboutContent() {
  const tags = [
    "Minimalist",
    "Offline Explorer",
    "Weekend Debugger",
    "Terminal Native",
    "AM Compiler",
    "Playlist Archaeologist",
    "Anti-Caffeine",
    "Dark Mode Maximalist",
  ];

  const highlights = [
    {
      title: "M.Tech, CSE — IIIT Delhi",
      date: "2023–2025",
    },
    {
      title: "Teaching Assistant (4x Semesters)",
      date: "Intro to Programming, DSA, OOP, Android Dev",
    },
    {
      title: "Research Intern — DRDO, ISRO",
      date: "2021–2022",
    },
    {
      title: "Built 10+ Full Stack & ML Projects",
      date: "React, Spring Boot, Python, TensorFlow",
    },
    {
        title: "Solved 500+ DSA problems",
        date: "LeetCode, GeeksforGeeks",
    },
    {
        title: "FIDE Rated Chess Player",
        date: "Rating: 1602",
    },
    {
        title: "Hindi | English | German",
        date: "Native | Professional | B1 ",
    }
  ];

  return (
    <section className="py-12 flex flex-col md:flex-row gap-10">
      {/* Left - Narrative + Tags */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-[#dfb16d]">Who Am I?</h2>
        <p className="text-justify">
          Hey — I’m a software engineer based in New Delhi, India. 
          <br></br>I enjoy taking ideas from scratch and turning them into real, working products — 
          whether that means building custom software, deploying robust, production-grade APIs that scale, or wiring everything together into something useful people can actually use.
        </p>
        <p className="text-justify">
          Beyond the code, I like things a little offbeat. 
          I spend time playing chess, football, collecting obscure trivia, 
          diving into strange Wikipedia rabbit holes, 
          or tinkering with random side projects that may never see the light of day.
        </p>
        <p>
            I like keeping things low-key — but always moving forward.
        </p>
    
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-14">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#dfb16d] text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right - Highlights Timeline */}
      <div className="flex-1 border-l-4 border-[#dfb16d] pl-6 space-y-6">
        <h3 className="text-xl font-bold text-[#dfb16d] mb-2">Highlights</h3><br></br>
        {highlights.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}