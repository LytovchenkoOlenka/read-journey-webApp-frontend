import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BookCard from "../BookCard/BookCard";

import "swiper/css";
import "swiper/css/navigation";

export default function BookSwiper({ books, onBookClick }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      className="m-0 w-full"
      breakpoints={{
        375: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
    >
      {books.map((book) => (
        <SwiperSlide key={book._id}>
          <BookCard book={book} onClick={() => onBookClick(book)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
