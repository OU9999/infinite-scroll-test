import { ReactNode } from "react";

interface AngProps {
  children: ReactNode;
}

const InfiniteScrollLayout = ({ children }: AngProps) => {
  return (
    <div className="w-dvw h-auto relative">
      <div className="w-full flex justify-center items-center z-0">
        <div className="w-full max-w-[68rem] flex flex-col justify-center items-center">
          <div className="w-full pt-20 pb-10 border-b-2 text-7xl flex justify-center">
            <p className="">Infinite Scroll</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollLayout;
