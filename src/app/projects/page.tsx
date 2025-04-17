import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <NavBar title="Projects" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold text-center">
          These are some of my projects:{" "}
        </h1>
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <div className="flex gap-4 items-center flex-row">
            <Image
          </div>
        </main>
      </div>
    </>
  );
}
