export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-white text-charcoal rounded-[30px] border border-transparent py-3 px-7 font-bold text-sm leading-[1.3] text-center
        transition-colors duration-500 ease-in-out
        hover:bg-transparent hover:text-white hover:border-white/20
        active:bg-transparent active:text-white active:border-white/20
        tablet:py-4  tablet:px-12 tablet:text-xl tablet:leading-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
