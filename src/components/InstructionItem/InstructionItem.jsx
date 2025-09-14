export default function InstructionItem({ number, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
        <span className="text-charcoal text-lg font-bold">{number}</span>
      </div>

      <p className="text-sm text-white leading-[1.29] tracking-tight w-full">
        {children}
      </p>
    </div>
  );
}

//  <span className="text-gray-medium">{text}</span>;
