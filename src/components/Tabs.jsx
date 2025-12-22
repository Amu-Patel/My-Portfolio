export default function Tabs({ active, setActive }) {
  const tabs = [
    { name: "about", icon: "bx bx-user" },
    { name: "resume", icon: "bx bxs-file" },
    { name: "works", icon: "bx bx-briefcase" },
    { name: "contact", icon: "bx bx-envelope" },
  ];

  const socials = [
    { icon: "bx bxl-github", link: "https://github.com/Amu-Patel" },
    { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/in/amisha-patel-47179028b" },
    { icon: "bx bxl-youtube", link: "https://www.youtube.com/@beingCoder001" },
    { icon: "bx bx-code", dropdown: true },
  ];

  return (
    <>
      {/* ================= DESKTOP TABS ================= */}
      <div className="hidden md:flex bg-primary/30 backdrop-blur-sm rounded-full shadow-md items-center gap-3 px-4 py-2 ml-8">

        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              active === tab.name
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-gray-100 hover:scale-105"
            }`}
          >
            <i className={`${tab.icon} text-lg`} />
            <span>
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </span>
          </button>
        ))}

        <span className="w-px h-6 bg-gray-300 mx-2" />

        {socials.map((item, index) =>
          item.dropdown ? (
            <div key={index} className="relative group">
              <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500">
                <i className={`${item.icon} text-lg group-hover:text-white`} />
              </button>

              <div className="absolute top-12 right-0 hidden group-hover:flex flex-col bg-white border rounded-lg shadow-md p-2 text-sm w-32">
                <a href="https://leetcode.com/u/amisha_patel_0024/" target="_blank" className="py-1 hover:text-orange-500">LeetCode</a>
                <a href="https://www.geeksforgeeks.org/user/amu013ik5/" target="_blank" className="py-1 hover:text-green-600">GFG</a>
                <a href="https://www.codechef.com/users/amisha_patel" target="_blank" className="py-1 hover:text-yellow-500">CodeChef</a>
              </div>
            </div>
          ) : (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <i className={`${item.icon} text-lg hover:text-white`} />
            </a>
          )
        )}
      </div>

      {/* ================= MOBILE FLOATING DOCK ================= */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg flex items-center gap-1">

          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActive(tab.name)}
              className={`p-3 rounded-full transition-all ${
                active === tab.name
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <i className={`${tab.icon} text-xl`} />
            </button>
          ))}

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/amisha-patel-47179028b"
            target="_blank"
            className="p-3 text-white/70 hover:text-white"
          >
            <i className="bx bxl-linkedin text-xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Amu-Patel"
            target="_blank"
            className="p-3 text-white/70 hover:text-white"
          >
            <i className="bx bxl-github text-xl" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/amisha_patel_0024/"
            target="_blank"
            className="p-3 text-white/70 hover:text-white"
          >
            <i className="bx bx-code-alt text-xl" />
          </a>
        </div>
      </div>
    </>
  );
}
