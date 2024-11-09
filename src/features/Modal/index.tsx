import ReactDOM from "react-dom";
import './index.css'
import { FC, ReactNode } from "react";
import { motion } from "framer-motion"

type Props ={
    closeModal: () => void
    children: ReactNode
}

const Modal:FC<Props> = ({closeModal, children}) => {
    const root = document.getElementById('portal__root')
    if(!root) return <div className="">error</div>
    return ReactDOM.createPortal(
        <motion.div className="modal-overlay"
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}
                >
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>&times;</button>
                {children}
            </div>
        </motion.div>,
        root
    );
}
 
export default Modal;