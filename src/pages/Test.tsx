
import { ArrowRight } from "lucide-react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooterSecond,
//   ModalTrigger,
// } from "../ui/animated-modal";
// import { PlaceholdersAndVanishInput } from "../ui/input";

import {motion} from "framer-motion"

export function AnimatedModalDemo({nvBtn}:{nvBtn: boolean}) {

    // const placeholders = [
    //     "Please enter your phone number ...",
    //     "Your phone Number ...",
    //     "Verify your phone number ...",
    //     "Leave your phone number ...",
    //     "Write your phone number ..."
    //   ];

    //   const placeholders2 = [
    //     "Please enter your Telegram username ...",
    //     "Provide your Telegram username ...",
    //     "Write your Telegram username ...",
    //     "Your Telegram username ...",
    //     "Link your Telegram account ..."
    //   ];

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value);
    //   };
    //   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("submitted");
    //   };

  return (
    <div className={`flex items-center ${!nvBtn && 'pb-20'} justify-center`}>
      {/* <Modal> */}
          {
            !nvBtn ? (
              <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center relative overflow-hidden bg-white text-black flex px-8 py-4 text-lg font-semibold font-sans justify-center group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 uppercase text-center transition duration-500">
              Contact Us
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <ArrowRight className="w-5 text-black h-5" />
              </div>
            </motion.div>
            ) : (
              <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} 
            className="text-center relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-shadow"
              >
                <button
            
          >
            Get Started
          </button>
             
            </motion.div>
            )
          }
        {/* <ModalBody cls2={`${nvBtn && 'h-screen'}`} className={`${nvBtn && 'h-screen'}`}>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center">
            Leave a request to connect
            </h4>
            <p className="text-sm 2xl:text-base mt-2  mb-8 text-center">Leave your details and we will contact you soon.</p>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="inpute flex flex-col gap-1 w-full">
                    <label htmlFor="number" className="font-mono pl-2">Phone number</label>
                    <PlaceholdersAndVanishInput cls2="hidden" cls="" onChange={handleChange}
        onSubmit={onSubmit}
 placeholders={placeholders}/>
                </div>

                <div className="inpute flex flex-col gap-1 w-full">
                    <label htmlFor="number" className="font-mono pl-2">Telegram</label>
                    <PlaceholdersAndVanishInput cls2="" cls="hidden" onChange={handleChange}
        onSubmit={onSubmit}
 placeholders={placeholders2}/>
                </div>
                
            </div>
            
          </ModalContent>
          <ModalFooterSecond className="gap-4"/>
        </ModalBody>
      </Modal> */}
    </div>
  );
}

