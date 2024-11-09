import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import FactCard from "../../components/FactCard";
import { factsStore, fetchFacts } from "../../effector/facts/FactsStore";
import { Facts } from "../../types";
import './index.css'

const FactsPage = () => {
    const facts = useUnit<Facts| null>(factsStore)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(false)
            await fetchFacts(page)
            setLoading(true)
        };
        loadData();
    }, [page]);

    const load = ()=>{
        setPage(page + 1);
    }
    return ( 
        <div className="facts_container">
            <h1>Facts ...</h1>
            {loading && facts?.items ? (
                    <InfiniteScroll
                        next={load}
                        dataLength={facts.items.length}
                        loader={<Loading />}
                        hasMore={page < facts.totalPages}
                    > 
                        {
                            facts.items.map((item) =>(
                                <FactCard key={item.factId} factsItem={item}/>
                            ))
                        }
                    </InfiniteScroll> 
                    ) : ( <Loading/> )
            }
        </div>
     );
}
 
export default FactsPage;