import { useState } from "react";

export default function usePopShow() {
  const [modalOpen, setModalOpen] = useState(false);

  const showHideModal = () => {
    setModalOpen(!modalOpen);
    if (modalOpen) {
      document.body.classList.remove("overflow");
    } else {
      document.body.classList.add("overflow");
    }
  };
  return { show: showHideModal, modal: modalOpen };
}
