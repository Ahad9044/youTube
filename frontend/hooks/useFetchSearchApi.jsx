const API_URL = import.meta.env.VITE_API_URL; 
const useFetchSearchApi = async (inputText) => {
   const rawData = await fetch(`${API_URL}/api/search?q=${inputText}`);
   const data = await rawData.json();
   // console.log(data)
   return data;
};

export default useFetchSearchApi;
