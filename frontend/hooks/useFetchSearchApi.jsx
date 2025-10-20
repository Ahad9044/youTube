const useFetchSearchApi = async (inputText) => {
   const rawData = await fetch(`http://localhost:4000/api/search?q=${inputText}`);
   const data = await rawData.json();
   // console.log(data)
   return data;
};

export default useFetchSearchApi;
