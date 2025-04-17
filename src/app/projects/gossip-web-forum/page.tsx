export default function Gossip() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:w-[50%] mx-auto jmin-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Gossip - Web Forum</h1>
      <div>
        <p className="text-xl text-left text-justify">
          This is a web forum built using React + TypeScript frontend and a Go +
          MySQL + Azure backend. The project was built as a submission for CVWO.
          It helped me learn the basics of web development and how to build a
          full stack application. For the UI, I used Material UI (MUI) and
          netlify to host the frontend.
          <br />
          <br />
          You can access the website{" "}
          <a
            href="https://gossip-forum.netlify.app"
            target="_blank"
            className="text-blue-500"
          >
            here
          </a>{" "}
          if I haven't run out of Azure credits.
        </p>
      </div>
    </div>
  );
}
