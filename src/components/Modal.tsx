
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Modal = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (type: boolean)=> void}) => {

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md w-full"
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Contact with Us
            </h2>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Write your contact information (Number, Email, Telegram)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder="Enter your contact info"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
            >
              <span className="mr-2">Submit</span>
              <motion.span
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                className="text-xl"
              >
                ✍️
              </motion.span>
            </motion.button>

            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
