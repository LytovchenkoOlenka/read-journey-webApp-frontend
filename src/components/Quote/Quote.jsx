import books from "../../assets/books.png";

export default function Quote() {
  return (
    <div className="flex gap-3.5 rounded-xl border border-transparent bg-gray-dark p-5 items-center">
      <img src={books} alt="" className="w-10 h-10 " />
      <p className="text-sm text-gray-medium">
        &quot;Books are <span className="text-white">windows</span> to the
        world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
}
