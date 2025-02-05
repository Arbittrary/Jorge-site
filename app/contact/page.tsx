import type { Metadata } from "next";
import PrettyImage from "../components/prettyImage";
import Navbar from "../components/navbar";
import Link from "next/link";
import CencImg from "../../public/cenc.jpg";

export const metadata: Metadata = {
  title: "Contact Me \u2014 Dalphan | Thomas Allred",
  description: "Contact Dalphan (Thomas Allred) for your next project.",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Contact",
    "DalphanDev",
    "React",
    "Node",
    "Go",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start justify-between w-full px-8 my-8">
        <div className="flex flex-col justify-start items-start space-y-16 w-full grow mb-8 mr-8">
          <h1 className="font-bold text-5xl">Contact Me</h1>
          <h2 className="font-medium text-3xl">Email: jorgeo2020atc@gmail.com</h2>
          <h2 className="font-medium text-3xl">Phone: 954-793-7906</h2>
          <h2 className="font-medium text-3xl">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jorgelortiz101"
              className=" text-blue-400"
            >
              LinkedIn
            </Link>
          </h2>
          <h2 className="font-medium text-3xl">
            <Link
              target="_blank"
              href="https://github.com/Arbittrary"
              className=" text-blue-400"
            >
              GitHub
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
}
