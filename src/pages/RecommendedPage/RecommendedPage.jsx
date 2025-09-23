import { useDispatch } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import { fetchRecommendedBooks } from "../../redux/books/operations";
import { useEffect } from "react";

export default function RecommendedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedBooks());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-5 desktop:flex-row">
      <Dashboard page="recommended" />
      <div className="flex-grow">
        <RecommendedBooks />
      </div>
    </div>
  );
}
