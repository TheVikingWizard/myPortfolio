function SkillCarousel({ dark = true, title, devicons }) {
  return (
    <div className="">
      <h3 className={`text-2xl font-semibold mb-6 ${dark ? "text-[#dfb16d]" : "text-[#766d3b]"}`}>{title}</h3>

      <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-8 items-center">
        {devicons.map(({ icon, label }, idx) => (
          <div key={idx} className="flex flex-col items-center w-20 text-center">
            <i
              className={`${icon} colored text-5xl mb-2 transition-transform hover:scale-110`}
              title={label}
            ></i>
            <span className={`text-sm font-medium ${dark ? "text-[#fdfcfc]" : "text-gray-600"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCarousel;