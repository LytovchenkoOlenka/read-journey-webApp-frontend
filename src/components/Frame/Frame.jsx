export default function Frame({ children, className = "" }) {
  return (
    <div
      className={`h-full flex flex-col px-5 py-5  bg-charcoal  rounded-[30px]  ${className}  `}
    >
      {children}
    </div>
  );
}
