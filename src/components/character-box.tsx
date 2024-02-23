import { formatDateToString } from "@/utils/dateUtil";
import Image from "next/image";

interface DescBoxProps {
  type: string;
  text: string;
}

const DescBox = ({ type, text }: DescBoxProps) => {
  return (
    <div className="flex flex-col w-full ">
      <p className="text-sm">{type}</p>
      <p className="font-semibold">{text}</p>
    </div>
  );
};

interface CharacterBoxProps {
  img: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: any;
}

const CharacterBox = ({
  img,
  name,
  status,
  species,
  gender,
  created,
}: CharacterBoxProps) => {
  return (
    <div className="flex bg-slate-100 space-x-1 rounded-lg overflow-hidden">
      <Image alt="character-img" src={img} width={400} height={200} />

      <div className="flex w-full flex-col py-2 px-2 justify-center">
        <p className="text-2xl font-bold mb-5">{name}</p>

        <div className="w-full h-auto space-y-2 ">
          <DescBox type="status" text={status} />
          <DescBox type="species" text={species} />
          <DescBox type="gender" text={gender} />
          <DescBox type="created" text={formatDateToString(created)} />
        </div>
      </div>
    </div>
  );
};

export default CharacterBox;
