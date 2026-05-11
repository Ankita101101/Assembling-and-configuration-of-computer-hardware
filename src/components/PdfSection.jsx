import unit1Pdf from "../pdfs/unit1.pdf";
import unit2Pdf from "../pdfs/unit2.pdf";

import {
  FileText,
  Download
} from "lucide-react";

export default function PdfSection() {

  return (

    <div className="p-8 w-full overflow-y-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        PDF Resources
      </h1>

      {/* PDF GRID */}
      <div className="grid grid-cols-2 gap-8">

        {/* UNIT I PDF */}
        <div className="bg-[#10182B] border border-cyan-500 rounded-2xl p-8 shadow-lg shadow-cyan-500/10">

          <div className="flex items-center gap-4 mb-6">

            <FileText size={40} className="text-cyan-400" />

            <h2 className="text-3xl font-bold text-cyan-300">
              PDF Unit I
            </h2>

          </div>

          <p className="text-gray-300 leading-8 mb-8">

            Complete notes and study materials for
            Unit I — Introduction to Computer Hardware.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            {/* VIEW */}
            <a
              href={unit1Pdf}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
            >

              View PDF

            </a>

            {/* DOWNLOAD */}
            <a
              href={unit1Pdf}
              download
              className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition flex items-center gap-2"
            >

              <Download size={18} />

              Download

            </a>

          </div>

        </div>

        {/* UNIT II PDF */}
        <div className="bg-[#10182B] border border-cyan-500 rounded-2xl p-8 shadow-lg shadow-cyan-500/10">

          <div className="flex items-center gap-4 mb-6">

            <FileText size={40} className="text-cyan-400" />

            <h2 className="text-3xl font-bold text-cyan-300">
              PDF Unit II
            </h2>

          </div>

          <p className="text-gray-300 leading-8 mb-8">

            Complete notes and study materials for
            Unit II — Graphics Cards & Devices.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            {/* VIEW */}
            <a
              href={unit2Pdf}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
            >

              View PDF

            </a>

            {/* DOWNLOAD */}
            <a
              href={unit2Pdf}
              download
              className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition flex items-center gap-2"
            >

              <Download size={18} />

              Download

            </a>

          </div>

        </div>

      </div>

    </div>

  );
}