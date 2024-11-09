import { FC } from 'react';
import { Fact } from '../../types';
import style from './index.module.css'

type FactsItem ={
    factsItem: Fact
}

const FactCard:FC<FactsItem> = ({factsItem}) => {
    return ( 
        <div className={style.wrapper}>
            <h3>{factsItem.title}</h3>
            <p>{factsItem.description}</p>
        </div>
     );
}
 
export default FactCard;