import Button from "../Button/Button";
import sprite from "../../assets/icons.svg";

export default function BookDetails({ book, onClose }) {
  const handleAddBook = () => {
    console.log(`Adding book with ID: ${book._id}`);
    onClose();
  };

  return (
    <div className="relative">
      <button onClick={onClose} className="absolute -top-6 -right-6">
        <svg width={22} height={22} className="stroke-white">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>

      <div className="flex gap-8">
        <img
          src={book.imageUrl}
          alt={`Cover of ${book.title}`}
          className="w-1/3 rounded-lg"
        />
        <div>
          <h3 className="text-2xl font-bold">{book.title}</h3>
          <p className="text-sm text-gray-medium mt-1 mb-4">{book.author}</p>
          <p className="text-base">{book.totalPages} pages</p>

          <Button onClick={handleAddBook} className="mt-8">
            Add to library
          </Button>
        </div>
      </div>
    </div>
  );
}
