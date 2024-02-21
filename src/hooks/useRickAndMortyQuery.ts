import { useSuspenseInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GetRickAndMortyCharacterProps {
  pageParam?: number;
}
const getRickAndMortyCharacter = async ({
  pageParam,
}: GetRickAndMortyCharacterProps) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  );

  return data;
};

interface CharacterResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  image: string;
  url: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  created: any;
}

interface RickAndMortyCharacter {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: CharacterResult[];
}

export const useRickAndMortyCharacterQuery = () => {
  return useSuspenseInfiniteQuery<RickAndMortyCharacter, Error>({
    queryKey: ["test"],
    queryFn: ({ pageParam }) => getRickAndMortyCharacter(pageParam as any),
    staleTime: Infinity,
    initialPageParam: 1,
    getNextPageParam: (lastpage) =>
      lastpage.info.next ? lastpage.info.next.slice(-1) : null,
  });
};
