import style from './index.module.css'
import img from '../../images/happy-bean.png'

const Loading = () => {
    return ( 
        <div className={style.loading}>
            <h1>Loading ...</h1>
            <img src={img} alt="happy-bean"/>
        </div>
     );
}
 
export default Loading;