import { useState, useCallback, useEffect } from "react";
import { Repo } from "../types/api";

export const useFetch = (url: string, options: {}) => {
  const [response, setResponse] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);

  const memorizeState = useCallback(() => {
    async function serverFetch(api: string, config: {}) {
      setLoading(true);
      try {
        const resolve = await fetch(api, config);
        const data = await resolve.json();
        setResponse(data.items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return console.error(error);
      }
    }
    // Calling the function with main args
    serverFetch(url, options);
  }, [url, options]);

  useEffect(() => {
    memorizeState();
  }, [memorizeState]);

  // returning hook state
  return { response, loading };
};
