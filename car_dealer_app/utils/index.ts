import axios from 'axios'
  
export const getCarData = async() =>{

    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {model: 'a4'},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST,
        }
      }

    try {
        const response = await axios.request(options);
        return (response.data)
    } catch (error:any) {
        return (error.message)
    }
}

 