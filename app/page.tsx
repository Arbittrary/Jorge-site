// import Image from "next/image";
import dynamic from "next/dynamic";

const CubeWithNoSSR = dynamic(() => import("./components/cube"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CubeWithNoSSR />
    </main>
  );
}
