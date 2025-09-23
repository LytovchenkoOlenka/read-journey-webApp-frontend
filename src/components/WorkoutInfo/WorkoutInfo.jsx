import InstructionItem from "../InstructionItem/InstructionItem";
import { Link } from "react-router-dom";
import sprite from "../../assets/icons.svg";

export default function WorkoutInfo() {
  return (
    <div className=" rounded-xl border border-transparent bg-gray-dark p-5">
      <div className="flex flex-col  gap-5 mb-3.5">
        <h3>Start your workout</h3>

        <InstructionItem number="1">
          Create a personal library:
          <span className="text-gray-medium">
            {` add the books you intend to read to it.`}
          </span>
        </InstructionItem>
        <InstructionItem number="2">
          Create your first workout:
          <span className="text-gray-medium">
            {` define a goal, choose a period, start training.`}
          </span>
        </InstructionItem>
      </div>
      <div className="flex justify-between items-center">
        <Link
          to="/library"
          className="text-sm underline text-gray-medium 
       hover:text-white transition-colors duration-300 tablet:text-sm tablet:leading-[1.29] tablet:tracking-tight"
        >
          My library
        </Link>
        <button type="button" className="p-0 bg-transparent border-none">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-navigate`} />
          </svg>
        </button>
      </div>
    </div>
  );
}
