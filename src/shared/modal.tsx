import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const closeModal = () => setShowModal(false);

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { y: "100vh", opacity: 0 },
  };

  const buttonTapAnimation = {
    scale: [1, 0.95, 1],
    rotate: [0, -5, 0],
    transition: { duration: 0.2 },
  };

  const inputFocusAnimation = {
    boxShadow: ["0px 0px 0px rgba(255, 107, 107, 0.5)", "0px 0px 10px rgba(255, 107, 107, 0.9)", "0px 0px 0px rgba(255, 107, 107, 0.5)"],
    transition: { duration: 1.2, repeat: Infinity },
  };

  return (
    <>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-[111111] flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div
            className="bg-[#121212] text-white p-8 rounded-lg shadow-lg max-w-md w-full"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-accent mb-4">Welcome!</h2>
            <p className="text-lightGray mb-6">This is your stunning dark-themed modal.</p>
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white outline-none"
              whileFocus={inputFocusAnimation}
            />
            <motion.button
              className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-red-500 relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 107, 107, 0.5)",
              }}
              whileTap={buttonTapAnimation}
              onClick={closeModal}
            >
              Close Modal
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
