import { FC } from "react";
import Modal from "../../features/Modal";
import style from './index.module.css'
import { Bean } from "../../types";

type Props ={
    closeModal: () => void
    data: Bean
}

const ModalBeans:FC<Props> = ({closeModal,data}) => {
    return ( 
        <Modal closeModal={closeModal}>
            
            <div className={style.containerBean}>
                <h3>{data.flavorName}</h3>
                <p>{data.description}</p>
                <div className={style.image}>
                    <img src={data.imageUrl} alt="" />
                </div>
                <div className={style.info}>
                    <p>Group Name:<br/>
                    {data.groupName}
                    </p>
                    <p>Ingredients:<br/>
                    {data.ingredients}
                    </p>
                </div>
                
            </div>
        </Modal>
     );
}
 
export default ModalBeans;