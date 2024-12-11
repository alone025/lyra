/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./shared/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar handleOpenModal={handleOpenModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <AnimatePresence>
        {openModal && <Modal showModal={openModal} setShowModal={setOpenModal} />}
      </AnimatePresence>

      </div>
    </Router>
  );
}

export default App;
