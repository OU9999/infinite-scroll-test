import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-40 w-40 pt-5 right-10 h-10 flex space-x-5 text-lg ">
      <Link href={"/"}>
        <p className="cursor-pointer">home</p>
      </Link>

      <Link href={"/scroll"}>
        <p className="cursor-pointer">scroll</p>
      </Link>
    </header>
  );
};

export default Header;
