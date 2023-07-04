import axios from "axios";


const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData= async (sw,ne) => {
    try {
        const {data: {data}} = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'eecc12d85cmsh94ab97371ba244cp13ad00jsn4f80d0ebfe33',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch(error){
        console.log(error);
    
    }
    
}


export default getPlacesData;