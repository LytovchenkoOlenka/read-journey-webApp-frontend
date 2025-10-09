export default function BookCard({ book, onClick }) {
  return (
    <li key={book._id} className="flex flex-col">
      <button onClick={onClick} className="flex flex-col gap-2 h-full">
        <div className="flex-grow">
          <img
            src={book.imageUrl}
            alt={`Book cover for ${book.title}`}
            className="w-full h-full object-fill rounded-lg"
          />
        </div>
        <div className="text-start">
          <p className="font-bold text-sm mb-1 truncate">{book.title}</p>
          <p className="text-[10px] text-gray-medium truncate">{book.author}</p>
        </div>
      </button>
    </li>
  );
}
