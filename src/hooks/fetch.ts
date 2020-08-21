import { useEffect } from "react";

export const useFetchData = <S extends {}>(path: string, setData: (s: S)=>void): ()=>void => {
  let aborted = false;
  const abort = () => {
    aborted = false;
  }
  useEffect(() => {
      const url = API_ORIGIN + path;
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (!aborted) setData(data);
      };
      fetchData();
      return abort;
  }, [path]);
  return abort;
};
