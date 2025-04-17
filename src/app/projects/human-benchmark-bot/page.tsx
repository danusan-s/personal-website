export default function HumanBenchmark() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:w-[50%] mx-auto jmin-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Human Benchmark Bot</h1>
      <div>
        <p className="text-xl text-left text-justify">
          This is an old project I built after high school to brush up on my
          python skills. This project is heavily inspired by{" "}
          <a
            href="https://www.youtube.com/@CodeBullet"
            className="text-blue-500"
          >
            Code Bullet
          </a>
          . The scripts allows you to get inhuman scores on the tests available
          on the{" "}
          <a href="https://humanbenchmark.com/" className="text-blue-500">
            Human Benchmark
          </a>{" "}
          website.
          <br />
          <br />
          This project isn't really something I would use to show off my skills
          but it is a fun side project that I was able to make when I had very
          little experience.
        </p>
      </div>
    </div>
  );
}
