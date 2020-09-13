import { useState, useEffect } from "react";

export const useFetch = <S extends {}>(path: string) => {
  const [state, setState] = useState<S | null | undefined>();

  useEffect(() => {
    let aborted = false;
    const url = API_ORIGIN + path;
    const fetchState = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (!aborted) setState(data);
    };
    fetchState();
    return () => {
      aborted = true;
    };
  }, [path]);
  return state;
};
