import React, { useState } from "react";

export const useDiclosure = ({ initial = false }) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openDisclosure = () => setIsOpen(true);
  const closeDisclosure = () => setIsOpen(false);
  const toggleDisclosure = () => setIsOpen((state) => !state);
  return { isOpen, openDisclosure, closeDisclosure, toggleDisclosure };
};
