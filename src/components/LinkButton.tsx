import Image from "next/image";
import Link from "next/link";

export default function LinkButton(props: {
  text: string;
  dest: string;
  iconSrc: string;
}) {
  return (
    <button>
      <Link
        className="rounded-[10px] border border-solid border-transparent transition-transform duration-100 hover:scale-110 flex items-center justify-center gap-2 text-shadow-lg font-medium text-sm sm:text-base px-4"
        href={`/${props.dest}`}
      >
        <div className="flex flex-col items-center gap-2 p-4">
          <Image
            className="dark:invert"
            src={`/${props.iconSrc}`}
            alt={`${props.text} Icon`}
            width={40}
            height={40}
          />
          <p>{props.text}</p>
        </div>
      </Link>
    </button>
  );
}
