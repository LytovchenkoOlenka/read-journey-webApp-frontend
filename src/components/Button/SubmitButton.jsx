import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function SubmitButton({ children, pendingText }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? pendingText : children}
    </Button>
  );
}
