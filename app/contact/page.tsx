import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";
import CencImg from "../../public/cenc.jpg";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex justify-between w-full space-x-16 px-8 mt-8">
        <div className="flex flex-col justify-start items-start space-y-16 w-full grow">
          <h1 className="font-bold text-5xl">Contact Me</h1>
          <h2 className="font-medium text-3xl">Email: tjallred02@gmail.com</h2>
          <h2 className="font-medium text-3xl">Phone: 954-268-4555</h2>
          <h2 className="font-medium text-3xl">Discord: dalphan</h2>
        </div>
        <Image
          className="shadow-2xl shadow-black/50 rounded-xl"
          src={CencImg}
          alt="cenc picture"
          width={1200}
          priority
          placeholder="blur"
        />
      </div>
    </main>
  );
}
