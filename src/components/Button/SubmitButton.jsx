import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function SubmitButton({
  children,
  pendingText,
  // variant,
  // className,
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      // variant={variant}
      // className={className}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
