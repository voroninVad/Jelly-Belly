import style from './index.module.css'
import { Bean } from "../../types";
import { FC, useState } from 'react';
import ModalBeans from '../../components/ModalBeans';

type BeansItem = {
    beanItem: Bean
}


const BeanCard:FC<BeansItem> = ({beanItem}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return ( 
        <>
            <div className={style.container} onClick={openModal}>
                <h4>{beanItem.flavorName}</h4>
                <img src={beanItem.imageUrl} alt={beanItem.flavorName} />
                <p>{beanItem.description}</p>
            </div>
            
        {isModalOpen && <ModalBeans closeModal={closeModal} data={beanItem}/>}
        </>
        
     );
}
 
export default BeanCard;