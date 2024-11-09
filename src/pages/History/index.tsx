import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { historyStore, fetchHistory } from "../../effector/history/HistoryStore";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import HistoryCard from "../../components/HistoryCard";
import './index.css'
import { History } from "../../types";

const HistoryPage = () => {
    const history = useUnit<History | null>(historyStore)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(false)
            await fetchHistory(page)
            setLoading(true)
        };
        loadData();
    }, [page]);

    const load = ()=>{
        setPage(page + 1);
    }
    return ( 
        <div className="history_container">
            <h1>History ...</h1>
            {loading && history?.items ? (
                    <InfiniteScroll
                        next={load}
                        dataLength={history.items.length}
                        loader={<Loading />}
                        hasMore={page < history.totalPages}
                    > 
                        {
                            history.items.map((item) =>(
                                <HistoryCard key={item.mileStoneId} historyItem={item}/>
                            ))
                        }
                    </InfiniteScroll> 
                    ) : ( <Loading/> )
            }
        </div>
     );
}
 
export default HistoryPage;