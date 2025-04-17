import NavBar from "@/components/NavBar";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <>
      <NavBar title="Home" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <h1 className="text-4xl font-bold text-center">
            Hi, I&apos;m Danusan
          </h1>
          <p className="text-xl text-center">
            I&apos;m a computer engineer with a passion for building things.
          </p>

          <div className="flex gap-4 items-center flex-row">
            <LinkButton text="About" iconSrc="about.svg" dest="about" />
            <LinkButton text="Projects" iconSrc="file.svg" dest="projects" />
          </div>
        </main>
      </div>
    </>
  );
}
