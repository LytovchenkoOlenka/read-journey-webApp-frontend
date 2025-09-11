const variants = {
  transparent: {
    base: "bg-transparent text-white border-white/20",
    hover: "hover:bg-white hover:text-charcoal hover:border-transparent",
    active: "active:bg-white active:text-charcoal active:border-transparent",
  },
  white: {
    base: "bg-white text-charcoal border-transparent",
    hover: "hover:bg-transparent hover:text-white hover:border-white/20",
    active: "active:bg-transparent active:text-white active:border-white/20",
  },
};

export default function Button({
  children,
  onClick,
  variant = "white",
  className = "px-7",
}) {
  const variantStyles = variants[variant] || variants.white;

  return (
    <button
      className={`rounded-[30px] border py-3 font-bold text-sm leading-[1.3] text-center transition-colors duration-500 ease-in-out 
        ${variantStyles.base} 
        ${variantStyles.hover}
        ${variantStyles.active}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
