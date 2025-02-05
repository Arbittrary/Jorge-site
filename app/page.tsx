import Navbar from "./components/navbar";
import TaskPage from "../public/taskPage.png";
import Link from "next/link";
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mx-auto max-w-screen-xl flex flex-col items-center md:flex-row md:items-start justify-between my-8 space-x-8 px-8">
  <div className="flex flex-col space-y-8 flex-grow">
    <h1 className="font-bold text-5xl">Hey! I'm Jorge Ortiz, a Full-Stack Web Developer & IT Professional</h1>
    <h2 className="font-medium text-xl">
      I'm a Full Stack Web Developer specializing in:
    </h2>
    <ul className="list-disc list-inside font-normal text-lg">
      <li>HTML/CSS/JS</li>
      <li>React</li>
      <li>C++</li>
      <li>Python</li>
    </ul>
  </div>
</div>
    </main>
  );
}
