import Link from "next/link";

interface LinkButtonProps {
  link: string;
  text: string;
}

const LinkButton = ({ link, text }: LinkButtonProps) => {
  return (
    <Link href={link} scroll={false}>
      <button className="px-5 py-1 bg-slate-200 rounded-md hover:bg-slate-400">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
