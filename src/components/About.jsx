export default function About() {
  return (
    <section id="about" className="py-12 px-4 overflow-x-hidden">
      {/* ABOUT */}
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          About
        </h2>

        <p className="text-base mb-4">
          <b>Hi, I’m Lavanya</b> (Official name: Amisha Patel) <br />
          I’m a fresher with a strong interest in full-stack development using
          the MERN stack (MongoDB, Express, React, Node.js). I enjoy learning
          how complete systems work—from designing responsive user interfaces to
          building efficient backend logic.
        </p>

        <p className="text-base mb-8">
          I have a solid foundation in C++ programming and am actively expanding
          my skills in Java and Python to strengthen my problem-solving and
          backend development capabilities. I’m highly motivated, quick to
          learn, and eager to work on real-world projects that help me grow as a
          software engineer.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div>
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
          Experience
        </h2>

        <div className="space-y-10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex gap-4">
              <img
                src="./icons/company_logo.jpg"
                alt="Murphtech"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Murphtech Software Solutions
                </h3>
                <p className="text-sm text-black mb-2">
                  Front-end Developer Intern
                </p>
                <p className="text-sm text-black max-w-xl">
                  Worked on responsive UI development and real-world projects.
                </p>
              </div>
            </div>

            <span className="text-sm text-black whitespace-nowrap">
              Oct 2023 
            </span>
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="flex gap-4">
              <img
                src="./icons/logo.png"
                alt="Shas Foundation"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  SHAS Foundation || NGO
                </h3>
                <p className="text-sm text-black mb-2">
                  Graphic Designer Intern
                </p>
                <p className="text-sm text-black max-w-xl">
                   Designed social media creatives and branding assets.
                </p>
              </div>
            </div>

            <span className="text-sm text-black whitespace-nowrap">
              Nov 2021
            </span>
          </div>

          
        </div>
      </div>
    </section>
  );
}
