import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

function NavButton(props: { title: string; dest: string; active: boolean }) {
  return (
    <Link href={`/${props.dest}`}>
      <div
        className={`text-lg transition-all duration-100 hover:scale-110 ${
          props.active
            ? "font-bold text-blue-600 scale-110"
            : "text-white-700 dark:text-black-700 hover:text-blue-400"
        }`}
      >
        {props.title}
      </div>
    </Link>
  );
}

export default function NavBar(props: { title: string }) {
  return (
    <nav className="h-16 shrink-0 flex items-center justify-between p-4 text-black dark:text-white">
      <div className="flex gap-4">
        <NavButton title="Home" dest="" active={props.title === "Home"} />
        <NavButton
          title="About"
          dest="about"
          active={props.title === "About"}
        />
        <NavButton
          title="Projects"
          dest="projects"
          active={props.title === "Projects"}
        />
      </div>
      <ThemeToggle />
    </nav>
  );
}
