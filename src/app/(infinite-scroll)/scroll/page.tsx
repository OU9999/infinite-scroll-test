import InfiniteScroll from "@/app/_component/infinite-scroll";
import axios from "axios";

const InfiniteScrollPage = async () => {
  // const { data } = await axios.get(
  //   "https://rickandmortyapi.com/api/character/?page=1"
  // );

  // console.log(data);

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center content-center">
        <InfiniteScroll />
      </div>
    </>
  );
};

export default InfiniteScrollPage;
