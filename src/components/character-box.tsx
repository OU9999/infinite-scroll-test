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
  id: number;
  img: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: any;
}

const CharacterBox = ({
  id,
  img,
  name,
  status,
  species,
  gender,
  created,
}: CharacterBoxProps) => {
  return (
    <div className="flex w-full bg-slate-100 space-x-1 rounded-lg overflow-hidden">
      <div className="relative w-48 md:w-72 flex-shrink-0 flex-grow-0">
        <Image
          alt="character-img"
          src={img}
          fill
          placeholder="blur"
          blurDataURL={
            "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPce/h4PQAHVALI8GDtfQAAAABJRU5ErkJggg=="
          }
        />
      </div>

      <div className="flex w-full flex-col py-2 px-2 justify-center">
        <p className="text-2xl font-bold mb-5">{name}</p>

        <div className="w-full h-auto space-y-2">
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
