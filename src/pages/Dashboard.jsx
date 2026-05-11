import { useState } from "react";

import {
  Search,
  Cpu,
  HardDrive,
  FileText
} from "lucide-react";

import unit1 from "../data/Unit1";
import unit2 from "../data/Unit2";

import PdfSection from "../components/PdfSection";

export default function Dashboard() {

  const [activeUnit, setActiveUnit] = useState("Unit I");

  const [topics, setTopics] = useState(unit1);

  const [selectedTopic, setSelectedTopic] = useState(unit1[0]);

  const [showPdfSection, setShowPdfSection] = useState(false);

  // CHANGE UNIT
  const changeUnit = (unitName) => {

    setShowPdfSection(false);

    if (unitName === "Unit I") {

      setActiveUnit("Unit I");
      setTopics(unit1);
      setSelectedTopic(unit1[0]);

    } else {

      setActiveUnit("Unit II");
      setTopics(unit2);
      setSelectedTopic(unit2[0]);

    }

  };

  return (

    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-[#0B1120] border-r border-cyan-900 flex flex-col">

        {/* LOGO */}
        <div className="p-6 border-b border-cyan-900">

          <h1 className="text-4xl font-bold text-cyan-400">
            ACCH
          </h1>

          <p className="text-gray-400 mt-2">
  Hardware Learning Platform
</p>

<p className="text-cyan-300 mt-1 text-sm tracking-wider">
  DBFS
</p>
<p className="text-cyan-300 mt-1 text-sm tracking-wider">
  By Ankita Kumari
</p>

        </div>

        {/* SIDEBAR CONTENT */}
        <div className="p-5">

          <h2 className="text-cyan-400 text-lg mb-4 font-semibold">
            SUBJECT UNITS
          </h2>

          {/* UNIT I */}
          <div
            onClick={() => changeUnit("Unit I")}
            className={`
              p-4 rounded-2xl mb-4 cursor-pointer border transition duration-300

              ${
                activeUnit === "Unit I" && !showPdfSection
                  ? "bg-cyan-500/20 border-cyan-300"
                  : "bg-[#10182B] border-cyan-900"
              }
            `}
          >

            <h3 className="font-bold text-lg">
              Unit I
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              Introduction to Computer Hardware
            </p>

          </div>

          {/* UNIT II */}
          <div
            onClick={() => changeUnit("Unit II")}
            className={`
              p-4 rounded-2xl mb-4 cursor-pointer border transition duration-300

              ${
                activeUnit === "Unit II" && !showPdfSection
                  ? "bg-cyan-500/20 border-cyan-300"
                  : "bg-[#10182B] border-cyan-900"
              }
            `}
          >

            <h3 className="font-bold text-lg">
              Unit II
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              Graphics Cards & Devices
            </p>

          </div>

          {/* PDF SECTION */}
          <div
            onClick={() => setShowPdfSection(true)}
            className={`
              p-4 rounded-2xl cursor-pointer border transition duration-300

              ${
                showPdfSection
                  ? "bg-cyan-500/20 border-cyan-300"
                  : "bg-[#10182B] border-cyan-900"
              }
            `}
          >

            <div className="flex items-center gap-3 mb-2">

              <FileText className="text-cyan-400" size={22} />

              <h3 className="font-bold text-lg">
                PDF Section
              </h3>

            </div>

            <p className="text-gray-300 text-sm">
              Unit-wise PDF resources
            </p>

          </div>

        </div>

      </div>

      {/* MAIN SECTION */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <div className="h-[80px] border-b border-cyan-900 flex items-center justify-between px-8 bg-[#08101F]">

          <h1 className="text-3xl font-bold text-cyan-400">

            {showPdfSection ? "PDF Resources" : activeUnit}

          </h1>

          {/* SEARCH */}
          <div className="flex items-center bg-[#10182B] px-4 py-3 rounded-xl border border-cyan-800 w-[350px]">

            <Search className="text-cyan-400 mr-3" size={20} />

            <input
              type="text"
              placeholder="Search topics..."
              className="bg-transparent outline-none w-full text-white"
            />

          </div>

        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-1 overflow-hidden">

          {showPdfSection ? (

            <PdfSection />

          ) : (

            <>

              {/* TOPIC CARDS */}
              <div className="w-[28%] p-6 overflow-y-auto border-r border-cyan-900">

                <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                  Learning Topics
                </h2>

                <div className="space-y-6">

                  {topics.map((topic) => (

                    <div
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`
                        rounded-2xl p-6 cursor-pointer transition duration-300 border

                        ${
                          selectedTopic.id === topic.id
                            ? "bg-cyan-500/20 border-cyan-300 shadow-[0_0_30px_#06b6d4]"
                            : "bg-[#10182B] border-cyan-500 hover:scale-[1.02] shadow-lg shadow-cyan-500/10"
                        }
                      `}
                    >

                      <div className="mb-4 text-cyan-400">

                        <Cpu size={35} />

                      </div>

                      <h2 className="text-2xl font-bold text-cyan-300 mb-3">
                        {topic.title}
                      </h2>

                      <p className="text-gray-300 leading-7">
                        {topic.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* CONTENT VIEWER */}
              <div className="flex-1 p-8 overflow-y-auto">

                <div className="flex items-center gap-4 mb-8">

                  <HardDrive size={40} className="text-cyan-400" />

                  <h1 className="text-4xl font-bold text-cyan-400">
                    {selectedTopic.title}
                  </h1>

                </div>

                <div className="bg-[#10182B] border border-cyan-500 rounded-2xl p-8 shadow-lg shadow-cyan-500/10">

                  <pre className="whitespace-pre-wrap text-gray-300 leading-8 text-lg">
                    {selectedTopic.content}
                  </pre>

                </div>

              </div>

            </>

          )}

        </div>

      </div>

    </div>

  );
}