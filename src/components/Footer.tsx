import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-16 shrink-0 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        href="mailto:danusansugumar@gmail.com"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          aria-hidden
          src="/email.svg"
          alt="Email icon"
          width={16}
          height={16}
        />
        Send me an email
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/danusan-s"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          aria-hidden
          src="/github-mark.svg"
          alt="Github icon"
          width={16}
          height={16}
        />
        Github
      </a>
    </footer>
  );
}
