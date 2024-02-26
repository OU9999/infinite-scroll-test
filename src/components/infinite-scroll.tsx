"use client";

import { useRickAndMortyCharacterQuery } from "@/hooks/useRickAndMortyQuery";
import { Virtuoso } from "react-virtuoso";
import CharacterBox from "./character-box";
import { useCallback } from "react";

const InfiniteScroll = () => {
  const { data, fetchNextPage } = useRickAndMortyCharacterQuery();

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      fetchNextPage();
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-2 grid-rows-4 gap-3"></div>

      <Virtuoso
        style={{ height: "calc(100vh - 50px)", margin: "0px" }}
        useWindowScroll
        totalCount={data?.pages[0].info.count}
        data={data?.pages}
        endReached={loadMore}
        itemContent={(idx, data) => (
          <div className="flex flex-col px-2 space-y-3 justify-center content-center items-center">
            <p className=" text-9xl">idx {idx}</p>
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
