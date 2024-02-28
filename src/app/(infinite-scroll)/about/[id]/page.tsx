import CharacterBox from "@/components/character-box";
import { CharacterResult } from "@/hooks/useRickAndMortyQuery";
import axios from "axios";

const getAboutCharacter = async (id: string): Promise<CharacterResult> => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return data;
};

interface AboutPageProps {
  params: {
    id: string;
  };
}

const AboutPage = async ({ params }: AboutPageProps) => {
  const character = await getAboutCharacter(params.id);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl my-10">About {character.name}</p>
      <CharacterBox
        id={character.id}
        img={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        created={character.created}
      />
    </div>
  );
};

export default AboutPage;
