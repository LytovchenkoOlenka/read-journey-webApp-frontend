import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Frame from "../Frame/Frame";
import { selectRecommendedBooks } from "../../redux/books/selectors";

export default function RecommendedBooks() {
  const books = useSelector(selectRecommendedBooks);
  console.log(books);
  return (
    <Frame className="flex-col gap-8 py-10">
      <h3 className="font-bold text-xl">Recommended</h3>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {books.map((book) => (
          <li key={book._id} className="flex flex-col">
            <Link
              to={`/books/${book._id}`}
              className="flex flex-col gap-2 h-full"
            >
              <div className="flex-grow">
                <img
                  src={book.imageUrl}
                  alt={`Book cover for ${book.title}`}
                  className="w-full h-[208px] object-fill rounded-lg"
                />
              </div>
              <div className="">
                <p className="font-bold text-sm mb-1 truncate">{book.title}</p>
                <p className="text-[10px] text-gray-medium truncate">
                  {book.author}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Frame>
  );
}
