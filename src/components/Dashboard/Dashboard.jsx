import { Link } from "react-router-dom";
import SubmitButton from "../Button/SubmitButton";
import Frame from "../Frame/Frame";
import Input from "../Input/Input";
import sprite from "../../assets/icons.svg";
import InstructionItem from "../InstructionItem/InstructionItem";

export default function Dashboard() {
  return (
    <Frame>
      <p className="pl-3.5 mb-2 text-2.5 ">Filters:</p>
      <form
        className="flex flex-col gap-5 mb-5 items-start "
        // action={formAction}
      >
        <div className="flex flex-col gap-2 tablet:gap-3.5 w-full">
          <Input label="Book title:" name="title" type="text" />
          <Input label="Thr author:" name="author" type="text" />
        </div>

        <SubmitButton pendingText="Applying..." className="py-2.5 px-5 ">
          To apply
        </SubmitButton>
      </form>
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
    </Frame>
  );
}
