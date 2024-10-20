import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7264/',
  //headers: {'X-Custom-Header': 'foobar'}
  //timeout: 1000,
});


export async function get<T>(path: string): Promise<T | undefined> {
  try {
    return (await api.get<T>(path)).data; 
  } catch (error) {
    console.log(error);
  }
}