import Frame from "../Frame/Frame";
import Quote from "../Quote/Quote";
import DashboardFilter from "../DashboardFilter/DashboardFilter";
import WorkoutInfo from "../WorkoutInfo/WorkoutInfo";

export default function Dashboard({ page }) {
  return (
    <aside className="flex flex-col gap-2.5 w-full desktop:w-[353px] desktop:flex-row desktop:flex-shrink-0">
      <Frame className=" tablet:flex-row tablet:p-8 tablet:gap-8 desktop:flex-col desktop:gap-5 desktop:pt-10 desktop:p-5">
        {page === "recommended" && (
          <>
            <DashboardFilter />
            <WorkoutInfo />
            <div className="hidden desktop:block">
              <Quote />
            </div>
          </>
        )}
        {/* {page === 'library' && <AddBookForm />}  */}
      </Frame>
    </aside>
  );
}
