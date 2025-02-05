'use client';

import Link from "next/link";

export default function MGIFarmsProject() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6">MGI Farms Website 🌱</h1>
      <p className="text-lg text-gray-300 mb-4">
        A full-stack website for a Michigan-based cannabis startup, built with React, TypeScript, and Node.js.
      </p>
      <p className="text-gray-400 mt-2">Tech Stack: React, Tailwind, Node.js, TypeScript</p>

      <Link href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          View Live Project
        </button>
      </Link>

      <Link href="/projects">
        <button className="mt-6 px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
          Back to Projects
        </button>
      </Link>
    </main>
  );
}
