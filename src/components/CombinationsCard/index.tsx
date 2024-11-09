import { FC } from 'react';
import { Combination } from '../../types';
import style from'./index.module.css'

type CombinationsItem={
    combinationsItem: Combination
}

const CombinationsCard:FC<CombinationsItem> = ({combinationsItem}) => {
    return ( 
        <div className={style.combinations__item}>
              <h3>{combinationsItem.name}</h3>
              <p>{combinationsItem.tag.map((item) => item + " ")}</p>
            </div>
     );
}
 
export default CombinationsCard;