export default function ChessRender() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:w-[50%] mx-auto jmin-h-[calc(100vh-8rem)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        Chess Render using OpenGL
      </h1>
      <div>
        <p className="text-xl text-left text-justify">
          This is a chess GUI written in C++ using OpenGL. The project was made
          to learn the basics of OpenGL and the graphics pipeline. The resource
          I used for this project is{" "}
          <a
            href="https://learnopengl.com/"
            className="disinline text-blue-500"
          >
            Learn OpenGL
          </a>{" "}
          .
          <br />
          <br />
          Initially, this project started out as a CLI chess game written in C++
          but then I decided I should build on top of it. So I started looking
          at designing either a chess engine or a chess GUI. I found that I
          could make my GUI with a game engine like unity. But this sort of led
          me down a rabbit hole of how game engines work and how they render
          graphics. This is when I discovered OpenGL.
        </p>
      </div>
    </div>
  );
}
