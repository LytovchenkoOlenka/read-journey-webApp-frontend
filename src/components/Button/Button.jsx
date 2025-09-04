// import css from './Button.module.css'

export default function Button({ label, onClick }) {
  return (
    <button
      className="bg-white text-charcoal rounded-[30px] border border-transparent p-3 min-w-[130px] font-bold text-sm leading-[1.29] tracking-wide text-center
        transition-colors duration-500 ease-in-out
        hover:bg-transparent hover:text-white hover:border-white/20
        active:bg-transparent active:text-white active:border-white/20"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
