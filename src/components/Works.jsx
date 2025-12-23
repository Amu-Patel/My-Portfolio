import { useState } from "react";

export default function Works() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: "./works/12.png",
      title: "Mern Auth",
      category: "Web",
      desc: "A responsive authentication system with component-based architecture and secure backend integration.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite", "Node.js", "Express", "MongoDB", "Nodemailer"],
      link: "https://github.com/Amu-Patel/complete-mini-Mern-Auth-project",
    },
    {
      img: "./works/1.png",
      title: "Hotstar Clone",
      category: "Web",
      desc: "A responsive UI clone of Hotstar focusing on layout structure and visual consistency.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://amu-patel.github.io/Hotstar-Clone/",
    },
    {
      img: "./works/2.png",
      title: "Hero Landing Page",
      category: "Web",
      desc: "A modern hero landing page emphasizing typography and clean layout.",
      tech: ["HTML", "CSS"],
      link: "https://amu-patel.github.io/Portfolio-website-interface/",
    },
    {
      img: "./works/9.png",
      title: "Flyer – SHAS Foundation",
      category: "Graphic",
      desc: "Designed a professional NGO flyer with strong visual hierarchy.",
      tech: ["Canva", "Design"],
      link: "https://www.canva.com/design/DAE22fd72fM/HopsK9-UoYYrSvhP5uMdOQ/edit",
    },
  ];

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="works"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-500 inline-block mb-6">
          Work
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap gap-6 mb-16 text-sm">
          {["All", "Web", "Graphic"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`transition ${
                filter === cat
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {visible.map((p, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-auto rounded-xl border object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-sm text-gray-400 mb-2">
                  {p.category}
                </p>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {p.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border rounded-full text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-blue-500 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
