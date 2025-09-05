export default function Frame({ children, className = "py-5" }) {
  return (
    <div
      className={`h-full flex flex-col px-5 bg-charcoal  rounded-[30px]  ${className}  `}
    >
      {children}
    </div>
  );
}
