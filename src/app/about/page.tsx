import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NavBar title="About" />
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center max-w-2xl text-center text-lg text-neutral-700 dark:text-neutral-300">
          <div className="flex flex-row items-center">
            <Image
              src="/me.jpg"
              alt="Profile Photo"
              width={200}
              height={200}
              className="rounded-full m-4"
            />
            <h1 className="text-4xl font-bold text-center">Danusan Sugumar</h1>
          </div>
          <p>
            Hey there! I’m Danusan — a Computer Engineering undergrad with a
            passion for building things that are fast, beautiful, and
            meaningful. Whether it’s tinkering with embedded systems or crafting
            web apps, I love connecting the dots between hardware and software.
          </p>
          <p>
            I enjoy learning by building and believe the best ideas come from
            curiosity.
          </p>
          <p>
            This site is a small collection of what I’m working on and thinking
            about. Thanks for stopping by!
          </p>
        </main>
      </div>
    </>
  );
}
