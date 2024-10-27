import axios from "axios";
const api = axios.create({
  baseURL: 'https://localhost:7264/',
});

const getAuthorization = (): {} => {
  return { 'authorization': window.sessionStorage.getItem('bearer') };
};

export async function get<T>(
  path: string,
  successAction?: () => Promise<void> | void,
  failedAction?: () => Promise<void> | void
): Promise<T | undefined> {
  try {
    const response = (await api.get<T>(path, { headers: getAuthorization() }))
    successAction && successAction();
    return response.data; 
  } catch (error: any) {
    if(error.status === 401) {
      window.sessionStorage.removeItem('bearer');
      window.location.reload();
    }
    failedAction && failedAction();
  }
}

export async function post<T>(
  path: string, 
  data?: unknown,
  successAction?: (response: T) => Promise<void> | void,
  failedAction?: () => Promise<void> | void
): Promise<void> {
  try {
    const response = (await api.post<T>(path, data, { headers: getAuthorization() })); 
    if(response.status === 200 || response.status === 201)
      successAction && successAction(response.data);
  } catch (error: any) {
    if(error.status === 401) {
      window.sessionStorage.removeItem('bearer');
      window.location.reload();
    }
    failedAction && failedAction();
  }
}

