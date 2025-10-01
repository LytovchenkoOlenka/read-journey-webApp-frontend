import Input from "../Input/Input";
import SubmitButton from "../Button/SubmitButton";

export default function DashboardFilter() {
  return (
    <div className="w-[295px] flex-shrink-0 desktop:w-[313px]">
      <p className="pl-3.5 mb-2 text-2.5 ">Filters:</p>
      <form
        className="flex flex-col gap-5 mb-5 items-start desktop:m-0"
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
    </div>
  );
}
