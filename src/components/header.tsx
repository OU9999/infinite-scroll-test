import LinkButton from "./link-button";

const Header = () => {
  return (
    <header className="fixed z-40 w-auto pt-5 right-10 h-10 flex space-x-5 text-lg ">
      <LinkButton link="/" text="Home" />
      <LinkButton link="/rq-scroll" text="rq-scroll" />
      <LinkButton link="/sa-scroll" text="sa-scroll" />
    </header>
  );
};

export default Header;
