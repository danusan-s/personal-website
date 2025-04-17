import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imgSrc = "file.svg",
  redirect = "",
  title = "Placeholder",
}: {
  imgSrc: string;
  redirect: string;
  title: string;
}) {
  return (
    <Link
      href={`/projects/${redirect}`}
      className="flex flex-col gap-4 items-center justify-center transition-transform duration-100 hover:scale-110"
    >
      <Image
        src={imgSrc}
        alt={title}
        width={150}
        height={150}
        className="shrink-0 rounded-lg shadow-lg p-4 dark:invert"
      />
      <h2 className="text-xl font-semibold max-w-[150px] text-center">
        {title}
      </h2>
    </Link>
  );
}
