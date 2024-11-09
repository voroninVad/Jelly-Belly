export const fetchData = async (id:string) =>{
    try {
        const response = await fetch(`https://jellybellywikiapi.onrender.com/api/Recipes/${id}`)
         const dat = await response.json(); 
        if (!response.ok) { 
            throw new Error(dat.message || 'Something went wrong'); 
        }  
        return dat      
    } catch (error) {
        console.error('Error fetching:', error);
    }
}
