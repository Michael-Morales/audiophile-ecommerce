import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: JSX.Element;
  show: boolean;
  onClose: () => void;
};

const Modal = ({ children, show, onClose }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const ModalContent = show ? (
    <>
      <div
        className="fixed inset-0 z-[999] mt-[5.625rem] bg-pale-grey lg:mt-24"
        onClick={onClose}
      />
      {children}
    </>
  ) : null;

  if (isBrowser) {
    return createPortal(
      ModalContent,
      document.querySelector("#modal") as HTMLElement
    );
  } else {
    return null;
  }
};

export default Modal;
