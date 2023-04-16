import { useState } from "react";

export const useToggle = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openElement = () => setIsOpen(true);
  const closeElement = () => setIsOpen(false);
  const toggleElement = () => setIsOpen((state) => !state);
  return { isOpen, openElement, closeElement, toggleElement };
};
