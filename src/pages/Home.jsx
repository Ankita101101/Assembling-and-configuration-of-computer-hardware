export default function Home({ setEntered }) {

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e933,transparent_70%)]"></div>

      {/* TOP LEFT */}
      <div className="absolute top-10 left-10 z-10">

        <h1 className="text-5xl font-bold text-cyan-400">
          ACCH
        </h1>

        <h2 className="text-2xl mt-2 text-gray-300">
          DBFS
        </h2>

        <p className="text-cyan-300 mt-3 text-xl">
          By Ankita Kumari
        </p>

      </div>

      {/* TOP RIGHT LOGO SPACE */}
      <div className="absolute top-10 right-10 z-10">

        <div className="w-[140px] h-[140px] border-2 border-cyan-400 rounded-full flex items-center justify-center text-center text-cyan-300">

          Department Logo

        </div>

      </div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10">

        {/* BIG TITLE */}
        <h1 className="text-[150px] font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_40px_#06b6d4]">

          ACCH

        </h1>

        {/* SUBJECT TITLE */}
        <h2 className="text-5xl md:text-6xl font-semibold tracking-[10px] uppercase text-gray-200 leading-[90px]">

          Assembling & Configuration <br />
          of Computer Hardware

        </h2>

        {/* LINE */}
        <div className="w-[500px] h-[2px] bg-cyan-500 mt-10 mb-10 shadow-[0_0_20px_#06b6d4]"></div>

        {/* DESCRIPTION */}
        <p className="max-w-[1000px] text-gray-300 text-2xl leading-[50px]">

          An interactive cyber-themed educational platform designed
          to help students understand the fundamentals of computer
          hardware, assembly processes, BIOS configuration,
          memory management, storage devices, and hardware installation
          techniques in a modern and practical learning environment.

        </p>

        {/* BUTTON */}
        <button
          onClick={() => setEntered(true)}
          className="mt-16 border-2 border-cyan-400 text-cyan-300 text-3xl px-16 py-6 rounded-2xl tracking-[8px] hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_30px_#06b6d4]"
        >

          ENTER PLATFORM

        </button>

      </div>

    </div>

  );
}