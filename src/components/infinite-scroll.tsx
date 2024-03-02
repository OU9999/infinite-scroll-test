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
  const dataKnownSize = 6128;
  const currentIdxSession = Number.isNaN(Number(sessionStorage.getItem("test")))
    ? undefined
    : Number(sessionStorage.getItem("test"));
  console.log("currentIdxSession>>", currentIdxSession);

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      fetchNextPage();
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIndex = () => {
    virtuosoRef.current.scrollToIndex({
      index: currentIdxSession,
      align: "start",
    });

    return false;
  };

  const hadnleScroll = () => {
    const currentIdx = Math.round(scrollY / dataKnownSize);
    sessionStorage.setItem("test", String(currentIdx));
  };

  useEffect(() => {
    handleIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const clearSessionStorage = () => sessionStorage.clear();
    window.addEventListener("beforeunload", clearSessionStorage);

    return () => {
      window.removeEventListener("beforeunload", clearSessionStorage);
    };
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
        isScrolling={() => hadnleScroll()}
        initialItemCount={currentIdxSession}
        initialScrollTop={currentIdxSession}
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
