import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
  isOpen: false,
  modalTopic: '',
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('Healthcare Market Opportunity Assessment');

  const openModal = (topic = 'Healthcare Market Opportunity Assessment') => {
    setModalTopic(topic);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalTopic, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
