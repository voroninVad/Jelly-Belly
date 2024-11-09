import img from '../../images/main.gif'
import './index.css'
import { motion } from "framer-motion"

const Home = () => {
    return ( 
        <div className="">
            <div className="home_container">
                <motion.img 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}
                src={img} alt="" />
                <div className="info">
                    <motion.h1
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:1}}
                    
                    >Welcome to the World of Jelly Belly:</motion.h1>
                    <motion.p
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:1.5}}
                    >A Rainbow of Flavors Awaits!</motion.p>
                </div>
            </div>
        </div>
     );
}
 
export default Home;