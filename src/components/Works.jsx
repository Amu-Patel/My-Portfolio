import { useState } from "react";

export default function Works() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: "./works/1.png",
      title: "Mern Auth",
      category: "Web",
      desc: "A responsive UI clone of authentication focusing on layout structure, spacing, and component-based design.",
      tech: ["HTML", "CSS", "JavaScript","reactjs","vite","nodejs","express.js","mongoDb","nodemailer"],
      link: "https://github.com/Amu-Patel/complete-mini-Mern-Auth-project",
    },
    {
      img: "./works/1.png",
      title: "Hotstar Clone",
      category: "Web",
      desc: "A responsive UI clone of Hotstar focusing on layout structure, spacing, and component-based design.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://amu-patel.github.io/Hotstar-Clone/",
    },
    {
      img: "./works/2.png",
      title: "Hero Landing Page",
      category: "Web",
      desc: "A modern hero section design emphasizing typography, alignment, and visual balance.",
      tech: ["HTML", "CSS"],
      link: "https://amu-patel.github.io/Portfolio-website-interface/",
    },
    {
      img: "./works/9.png",
      title: "Flyer – SHAS Foundation",
      category: "Graphic",
      desc: "Designed an event flyer for an NGO, focusing on information hierarchy and visual clarity.",
      tech: ["Canva", "Design"],
      link: "https://www.canva.com/design/DAE22fd72fM/HopsK9-UoYYrSvhP5uMdOQ/edit",
    },
  ];

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block mb-4">
          Work
        </h2>

        {/* Filter */}
        <div className="flex gap-8 mb-20 text-sm">
          {["All", "Web", "Graphic"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${
                filter === cat
                  ? "text-black font-semibold"
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
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="md:w-1/2 rounded-xl border"
              />

              {/* Content */}
              <div className="max-w-xl">
                <p className="text-sm text-gray-500 mb-2">
                  {p.category}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {p.title}
                </h3>

                <p className="text-white mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border rounded-full text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-medium hover:underline"
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
