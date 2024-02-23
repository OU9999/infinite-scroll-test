"use client";

import { useRickAndMortyCharacterQuery } from "@/hooks/useRickAndMortyQuery";
import { Suspense } from "react";
import { Virtuoso } from "react-virtuoso";
import CharacterBox from "./character-box";

const InfiniteScroll = () => {
  const { data, fetchNextPage } = useRickAndMortyCharacterQuery();

  return (
    <>
      <button onClick={() => fetchNextPage()}>test</button>
      <div className="w-full grid grid-cols-2 grid-rows-4 gap-3">
        <CharacterBox
          img={data.pages[0].results[0].image}
          name={data.pages[0].results[0].name}
          status={data.pages[0].results[0].status}
          species={data.pages[0].results[0].species}
          gender={data.pages[0].results[0].gender}
          created={data.pages[0].results[0].created}
        />
      </div>

      <Virtuoso
        style={{ height: "calc(100vh - 50px)", margin: "0px" }}
        useWindowScroll
        totalCount={data.pages[0].info.count}
        itemContent={(index) => (
          <Suspense fallback={<p>loading...</p>}>
            <div> item {index}</div>
          </Suspense>
        )}
      />
    </>
  );
};

export default InfiniteScroll;
