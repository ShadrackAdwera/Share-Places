import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const AbortController = window.AbortController
      const httpAbortCtlr = new AbortController();
      activeHttpRequests.current.push(httpAbortCtlr);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtlr.signal,
        });
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(reqCtl => reqCtl !== httpAbortCtlr )

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
        throw error;
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtl) => abortCtl.abort());
    };
  }, []);

  return { isLoading, error, clearError, sendRequest };
};
