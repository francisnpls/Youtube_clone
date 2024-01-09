import axios from "axios";

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b85efe349msh6585e05074a1558p13839fjsn43077bfcdebb',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}