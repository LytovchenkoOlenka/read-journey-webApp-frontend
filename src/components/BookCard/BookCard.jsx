export default function BookCard({ book, onClick }) {
  return (
    <button
      onClick={onClick}
      key={book._id}
      className="flex flex-col text-left w-[137px] "
    >
      <img
        src={book.imageUrl}
        alt={`Book cover for ${book.title}`}
        className="aspect-[2/3] object-cover rounded-lg mb-2"
      />

      <p className="font-bold text-sm mb-1 truncate">{book.title}</p>
      <p className="text-[10px] text-gray-medium truncate">{book.author}</p>
    </button>
  );
}
