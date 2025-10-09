import Button from "../Button/Button";
import sprite from "../../assets/icons.svg";

export default function BookDetails({ book, onClose }) {
  const handleAddBook = () => {
    console.log(`Adding book with ID: ${book._id}`);
    onClose();
  };

  return (
    <div className="relative w-[335px] px-24 py-10 tablet:px-[174px] tablet:w-[500px] desktop:py-[50px]">
      <button onClick={onClose} className="absolute top-4 right-4">
        <svg width={22} height={22} className="stroke-white">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>

      <div className="flex flex-col  ">
        <img
          src={book.imageUrl}
          alt={`Cover of ${book.title}`}
          className="rounded-lg mb-4 px-1.5"
        />

        <div className="text-center text-white mb-5 tablet:mb-8">
          <h3 className="text-lg font-bold mb-1 leading-none tracking-tight">
            {book.title}
          </h3>
          <p className="text-xs text-gray-medium mb-1">{book.author}</p>
          <p className="text-[10px] leading-[1.2]">{book.totalPages} pages</p>
        </div>
        <Button onClick={handleAddBook} className="">
          Add to library
        </Button>
      </div>
    </div>
  );
}
