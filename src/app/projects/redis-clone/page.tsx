export default function Redis() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:w-[50%] mx-auto jmin-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Redis Clone</h1>
      <div>
        <p className="text-xl text-left text-justify">
          The repository for the project can be found{" "}
          <a
            href="https://github.com/danusan-s/redis-clone"
            target="_blank"
            className="text-blue-500"
          >
            here
          </a>{" "}
          .
          <br />
          <br />
          This is a Redis clone built using C++. Redis is an in-memory database
          that can be hosted on servers and requests can be made through a TCP
          socket. I came across Redis while I was looking through the tech stack
          breakdown of major companies. Redis is often used as a caching layer
          to speed up database queries. I thought it would be a fun project to
          build a Redis clone from scratch. The reference I used for this
          project is the book{" "}
          <a href="https://build-your-own.org/redis/" className="text-blue-500">
            Build Your Own Redis
          </a>{" "}
          .
          <br />
          <br />
          Through this project I was able to learn the following:
        </p>
        <ul className="list-disc pl-10">
          <li>The Redis protocol</li>
          <li>Implementing an event loop</li>
          <li>Implementing a TCP server</li>
          <li>The usage of intrusive data structures</li>
        </ul>
      </div>
    </div>
  );
}
