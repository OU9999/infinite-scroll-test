"use client";

import { useRickAndMortyCharacterQuery } from "@/hooks/useRickAndMortyQuery";
import { Virtuoso } from "react-virtuoso";
import CharacterBox from "./character-box";
import { useCallback, useEffect, useRef } from "react";
import SkeletonBox from "./skeleton-box";

const InfiniteScroll = () => {
  const {
    data: CharactersData,
    fetchNextPage,
    isLoading,
  } = useRickAndMortyCharacterQuery();
  const virtuosoRef = useRef<any>(null);
  const idxRef = useRef<any>(null);

  const hello = Number(sessionStorage.getItem("test"));

  //idx 5 start pt24512px / pb6128px

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      fetchNextPage();
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIndex = () => {
    virtuosoRef.current.scrollToIndex({
      index: hello,
      align: "start",
    });

    return false;
  };

  useEffect(() => {
    handleIndex();

    console.log(hello);

    return () => {
      const length = CharactersData?.pages.length;
      // console.log(virtuosoRef.getState());
      return sessionStorage.setItem("test", String(length));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col px-2 space-y-3 justify-center content-center items-center">
          <p className=" text-9xl">idx 0</p>
          <SkeletonBox />
          <SkeletonBox />
        </div>
      )}

      <Virtuoso
        style={{ height: "calc(100vh - 50px)", margin: "0px" }}
        ref={virtuosoRef}
        useWindowScroll
        totalCount={CharactersData?.pages[0].info.count}
        data={CharactersData?.pages}
        endReached={loadMore}
        initialItemCount={hello}
        initialScrollTop={hello}
        itemContent={(idx, data) => (
          <div className="flex flex-col px-2 space-y-3 justify-center content-center items-center">
            <p className="text-9xl">idx {idx}</p>
            {data.results.map((character) => (
              <CharacterBox
                key={"char" + character.id}
                id={character.id}
                img={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                created={character.created}
              />
            ))}
          </div>
        )}
      />
    </>
  );
};

export default InfiniteScroll;
