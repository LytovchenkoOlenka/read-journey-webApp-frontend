export default function Frame({ children, className = "py-5 flex-col" }) {
  return (
    <div
      className={`h-full flex  px-5 bg-charcoal  rounded-[30px]  ${className}  `}
    >
      {children}
    </div>
  );
}
