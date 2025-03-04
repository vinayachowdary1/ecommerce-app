import { useEffect, useState } from "react"

const useFetch = (url)=>{
const[data,setData] = useState([]);
const[loading,setLoading] = useState(false);
const[error,setError] = useState(null);
const fetchData = async()=>{
    setLoading(true);
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Please Check your internet connection!!!");
    } 
    const result = await response.json();
    setData(result);
} catch (error) {
    setError(error.message)
}
finally{
    setLoading(false);
}
}
useEffect(()=>{
  fetchData();
},[]);
return{data,loading,error};
}
export default useFetch