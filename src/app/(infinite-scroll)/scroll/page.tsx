import InfiniteScroll from "@/components/infinite-scroll";

const InfiniteScrollPage = async () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center content-center">
        <InfiniteScroll />
      </div>
    </>
  );
};

export default InfiniteScrollPage;
