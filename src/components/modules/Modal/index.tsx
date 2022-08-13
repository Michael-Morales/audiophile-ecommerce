import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { styles, dynamicStyles } from "./styles";

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
      <div className="overlay" onClick={onClose} />
      {children}

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
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
