import { ReactNode } from "react";

interface AngProps {
  children: ReactNode;
}

const InfiniteScrollLayout = ({ children }: AngProps) => {
  return (
    <div className="w-dvw h-auto relative">
      <div className="w-full flex justify-center items-center z-0">
        <div className="w-full max-w-[68rem] flex flex-col justify-center items-center">
          <p className="text-7xl py-20">한무 스크롤 테스트</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollLayout;
