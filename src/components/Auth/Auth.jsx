import iphoneMobile from "../../img/iphone-mobile.png";
import iphoneDesktop from "../../img/iphone-desktop.png";
import Frame from "../Frame/Frame.jsx";
import Logo from "../Logo/Logo.jsx";

export default function Auth({ children }) {
  return (
    <div className="min-h-screen my-0 mx-auto grid grid-cols-1  p-5 gap-[10px] tablet:p-8 desktop:gap-4 desktop:grid-cols-2">
      <Frame className=" pb-10 pt-5 gap-5 tablet:gap-10 tablet:pt-10 tablet:pb-[212px] tablet:pl-16 tablet:pr-[168px] desktop:pt-10 desktop:pb-10 desktop:px-16">
        {/* Верхня частина картки */}
        <div>
          <Logo />
          <h2
            className="text-3xl font-medium leading-none tracking-[0.02em]  mt-10
            tablet:text-[64px] tablet:leading-[94%] tablet:mt-40 desktop:mt-[107px]"
          >
            Expand your mind, reading
            <span className="text-gray-light/30"> a book</span>
          </h2>
        </div>
        {/* Нижня частина картки (форма) */}
        <div>{children}</div>
      </Frame>
      <Frame className="h-full justify-end pb-0 pt-5 px-10 tablet:hidden desktop:block desktop:pt-20 desktop:px-24 ">
        <picture>
          <source media="(min-width: 1280px)" srcSet={iphoneDesktop} />
          <img
            src={iphoneMobile}
            alt="Phone"
            className="w-full h-full object-cover"
          />
        </picture>
      </Frame>
    </div>
  );
}
