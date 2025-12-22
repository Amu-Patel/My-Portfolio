import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black p-4 md:p-6">

      {/* ================= SIDEBAR ================= */}
      {/* Mobile: always visible at top/left */}
      <aside className="w-full md:w-fit mb-4 md:mb-0">
        <Sidebar />
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col relative pb-20 md:pb-0">

        {/* ================= DESKTOP TOP TABS ================= */}
        <div className="hidden md:block w-full mb-4">
          <Tabs active={active} setActive={setActive} />
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 bg-white/30 backdrop-blur-[30px] text-black font-poppins rounded-xl border border-white/20 shadow p-4 sm:p-6 w-full max-w-4xl md:mt-6 overflow-y-auto no-scrollbar mx-auto">
          {active === "about" && <About />}
          {active === "resume" && <Resume />}
          {active === "works" && <Works />}
          {active === "contact" && <Contact />}
        </main>

        {/* ================= MOBILE BOTTOM TAB BAR ================= */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
          <Tabs active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
