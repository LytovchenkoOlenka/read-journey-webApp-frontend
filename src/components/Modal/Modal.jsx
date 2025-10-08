import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={`bg-charcoal border border-gray-medium/20 rounded-xl ${className}`}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
