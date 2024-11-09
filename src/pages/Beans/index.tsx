import './index.css'
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import InfiniteScroll from 'react-infinite-scroll-component'
import { Beans } from "../../types";
import Loading from "../../components/Loading";
import BeanCard from "../../components/BeanCard";
import { beansStore, fetchBeans } from '../../effector/beans/BeansStore' 


const BeansPages = () => {
    const beans = useUnit<Beans| null>(beansStore)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)  

    useEffect(() => {
        const loadData = async () => {
            setLoading(false)
            await fetchBeans(page)
            setLoading(true)
        };
        loadData();
    }, [page]);

    const load = ()=>{
        setPage(page + 1);
    }
    return ( 
        <div className="beans_container">
            <h1>Explore All Beans ...</h1>
            {loading && beans?.items ? (
                    <InfiniteScroll
                        next={load}
                        dataLength={beans.items.length}
                        loader={<Loading />}
                        hasMore={page < beans.totalPages}
                    > 
                        {
                            beans.items.map((item) =>(
                                <BeanCard key={item.beanId} beanItem={item}/>
                            ))
                        }
                    </InfiniteScroll> 
                    ) : ( <Loading/> )
            }
        </div>
     );
}
 
export default BeansPages;