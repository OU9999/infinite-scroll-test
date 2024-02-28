import LinkButton from "@/components/link-button";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="flex w-full justify-center space-x-10  my-10">
        <LinkButton link="/rq-scroll" text="Go To Infinite Scroll" />
      </div>
      <div className="w-full flex justify-center space-x-10">
        <p>Next.js@14.1</p>
        <p>React-Query@5.2</p>
        <p>React-Virtuoso@4.7</p>
      </div>
    </div>
  );
};

export default HomePage;
