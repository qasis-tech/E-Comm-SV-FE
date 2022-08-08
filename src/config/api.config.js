import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(true);
  const URL = `${process.env.BASE_URL}${url}`;

  useEffect(() => {
    axios
      .post(url, payload)
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(false));
  }, []);

  return { data, error, loaded };
};

export default useAxiosPost;
