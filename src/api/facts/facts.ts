export const fetchData = async (page: number) =>{
    try {
        const response = await fetch(`https://jellybellywikiapi.onrender.com/api/facts?pageIndex=${page}&pageSize=16`)
         const dat = await response.json(); 
        if (!response.ok) { 
            throw new Error(dat.message || 'Something went wrong'); 
        }  
        return dat      
    } catch (error) {
        console.error('Error fetching:', error);
    }
}