import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import { combinationsStore, fetchCombinations } from "../../effector/combinations/CombinationsStore";
import CombinationsCard from "../../components/CombinationsCard";
import { Combinations } from "../../types";

const CombinationsPage = () => {
    const combinations = useUnit<Combinations | null>(combinationsStore)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(false)
            await fetchCombinations(page)
            setLoading(true)
        };
        loadData();
    }, [page]);

    const load = ()=>{
        setPage(page + 1);
    }
    return ( 
        <div className="history_container">
            <h1>Combinations ...</h1>
            {loading && combinations?.items ? (
                    <InfiniteScroll
                        next={load}
                        dataLength={combinations.items.length}
                        loader={<Loading />}
                        hasMore={page < combinations.totalPages}
                    > 
                        {
                            combinations.items.map((item) =>(
                                <CombinationsCard key={item.combinationId} combinationsItem={item}/>
                            ))
                        }
                    </InfiniteScroll> 
                    ) : ( <Loading/> )
            }
        </div>
     );
}
 
export default CombinationsPage;