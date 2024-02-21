"use client";

import { useRickAndMortyCharacterQuery } from "@/hooks/useRickAndMortyQuery";
import { Suspense } from "react";
import { Virtuoso } from "react-virtuoso";

const InfiniteScroll = () => {
  const { data, fetchNextPage } = useRickAndMortyCharacterQuery();

  return (
    <>
      <button onClick={() => fetchNextPage()}>test</button>
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
