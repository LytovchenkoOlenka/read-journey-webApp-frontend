import { useSelector } from "react-redux";
import Frame from "../Frame/Frame";
import { selectRecommendedBooks } from "../../redux/books/selectors";
import BookCard from "../BookCard/BookCard";

export default function RecommendedBooks() {
  const books = useSelector(selectRecommendedBooks);
  // console.log(books);
  return (
    <Frame className="w-full flex-col gap-8 py-10">
      <h3 className="font-bold text-xl">Recommended</h3>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </ul>
    </Frame>
  );
}
