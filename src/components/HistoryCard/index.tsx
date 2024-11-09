import { FC } from 'react';
import style from './index.module.css'
import { mileStones } from '../../types';

type HistoryItem={
    historyItem: mileStones
}

const HistoryCard:FC<HistoryItem> = ({historyItem}) => {
    return ( 
        <div className={style.history__item}>
            <div className={style.info_history}>
                
                <h4>{historyItem.year}</h4>
                <p>{historyItem.description}</p>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className={`${style.svg_inline__fa} ${style.beatFade}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        </div>
     );
}
 
export default HistoryCard;