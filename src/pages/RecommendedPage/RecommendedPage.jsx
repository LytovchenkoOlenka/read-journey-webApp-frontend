import { useDispatch } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import { fetchRecommendedBooks } from "../../redux/books/operations";
import { useEffect } from "react";

export default function RegisterPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedBooks());
  }, [dispatch]);

  return (
    <>
      <Dashboard />
      <RecommendedBooks />
    </>
  );
}
