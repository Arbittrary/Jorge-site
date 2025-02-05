'use client';

import Navbar from "../../components/navbar";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mx-auto max-w-screen-xl flex flex-col items-center md:flex-row md:items-start justify-between my-8 space-x-8 px-8">
        <div className="flex flex-col space-y-8 flex-grow">
          <h1 className="font-bold text-5xl">Projects I've Worked On</h1>
          <h2 className="font-medium text-xl">
            Here are some of the projects from my experience as a Full-Stack Developer & IT Professional:
          </h2>

          {/* Projects Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* MGI Farms Project */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white">MGI Farms Website</h3>
              <p className="text-gray-400 mt-2">
                A full-stack website for a Michigan-based cannabis startup, featuring React, TypeScript, and Node.js.
              </p>
              <p className="mt-2 text-sm text-blue-300">Tech Stack: React, Tailwind, Node.js, TypeScript</p>
              {/*
              <Link href="/projects/MGIFarms" target="_blank">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  View Project
                </button>
              </Link>
              */}
            </div>

        
           
          </div>
        </div>
      </div>
    </main>
  );
}
