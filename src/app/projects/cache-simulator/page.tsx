export default function CacheSim() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:w-[50%] mx-auto jmin-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Cache Simulator</h1>
      <div>
        <p className="text-xl text-left text-justify">
          The repository for the project can be found{" "}
          <a
            href="https://github.com/danusan-s/cache-sim"
            target="_blank"
            className="text-blue-500"
          >
            here
          </a>{" "}
          .
          <br />
          <br />
          This is a cache simulator built using C++. The project was built to
          help me understand the intricacies of how caches work. I was inspired
          to build this project after I read about the layers of caches in the
          modern CPU architecture. I wanted to build a simulator that would
          allow me to visualize how caches work and how they affect the
          performance of a CPU.
        </p>
      </div>
    </div>
  );
}
