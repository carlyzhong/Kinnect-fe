import { useEffect, useState } from "react";

export default function useFetching(apiFunc, articleId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFunc(articleId)
      .then((dataFromApi) => {
        setData(dataFromApi);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiFunc, articleId]);

  return { data, setData, isLoading, error };
}
