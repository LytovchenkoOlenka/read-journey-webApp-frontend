import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function UserInfo() {
  const user = useSelector(selectUser);

  const username = user?.name || "User";
  const userInitial = username[0];
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[35px] h-[35px] bg-gray-dark rounded-full border border-white/20 flex items-center justify-center tablet:w-10 tablet:h-10  ">
        <p className="text-base font-bold uppercase">{userInitial}</p>
      </div>
      <p className="hidden desktop:block text-base font-bold">{username}</p>
    </div>
  );
}
