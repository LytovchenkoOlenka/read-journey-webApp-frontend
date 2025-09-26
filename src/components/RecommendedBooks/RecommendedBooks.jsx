import { useSelector } from "react-redux";
import Frame from "../Frame/Frame";
import { selectRecommendedBooks } from "../../redux/books/selectors";
import BookCard from "../BookCard/BookCard";
import Modal from "../Modal/Modal";
import { useState } from "react";
import BookDetails from "../BookModal/BookDetails";

export default function RecommendedBooks() {
  const books = useSelector(selectRecommendedBooks);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Frame className="w-full flex-col gap-8 py-10 desktop:p-10 ">
        <h3 className="font-bold text-xl">Recommended</h3>

        <ul className="grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 desktop:gap-x-5 desktop:gap-y-7">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onClick={() => handleOpenModal(book)}
            />
          ))}
        </ul>
      </Frame>

      {selectedBook && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <BookDetails book={selectedBook} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}
