import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="text-2xl font-bold text-center">
            These are some of my software projects:
          </h1>
          <p className="text-xl text-center">
            (These can also be found on my GitHub)
          </p>
        </div>
        <div className="flex gap-8 items-start justify-center flex-row flex-wrap">
          <ProjectCard
            imgSrc="/projects/cpu.svg"
            redirect="cache-simulator"
            title="Cache Simulator"
          />
          <ProjectCard
            imgSrc="/projects/redis.svg"
            redirect="redis-clone"
            title="Redis Clone"
          />
          <ProjectCard
            imgSrc="/projects/gossip.png"
            redirect="gossip-web-forum"
            title="Web Forum Gossip"
            invert={false}
          />
          <ProjectCard
            imgSrc="/projects/chess.svg"
            redirect="chess-render-opengl"
            title="Chess Render OpenGL"
          />
          <ProjectCard
            imgSrc="/projects/human-benchmark.svg"
            redirect="human-benchmark-bot"
            title="Human Benchmark Bot"
          />
        </div>
      </div>
    </>
  );
}
