import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <li key={book._id} className="flex flex-col">
      <Link to={`/books/${book._id}`} className="flex flex-col gap-2 h-full">
        <div className="flex-grow">
          <img
            src={book.imageUrl}
            alt={`Book cover for ${book.title}`}
            className="w-full h-[208px] object-fill rounded-lg"
          />
        </div>
        <div>
          <p className="font-bold text-sm mb-1 truncate">{book.title}</p>
          <p className="text-[10px] text-gray-medium truncate">{book.author}</p>
        </div>
      </Link>
    </li>
  );
}
