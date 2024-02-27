const SkeletonBox = () => {
  return (
    <div className="w-full h-72 bg-slate-100 rounded-lg relative flex">
      <div className="relative w-48 md:w-72 flex-shrink-0 flex-grow-0 p-3">
        <div className="bg-slate-300 w-full h-full relative rounded-md"></div>
      </div>
      <div className="flex w-full flex-col p-3">
        <div className="bg-slate-300 w-full h-10 relative rounded-md mb-10" />
        <div className="w-full space-y-3">
          <div className="bg-slate-300 w-5/6 h-5 relative rounded-md" />
          <div className="bg-slate-300 w-5/6 h-5 relative rounded-md" />
          <div className="bg-slate-300 w-5/6 h-5 relative rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBox;
