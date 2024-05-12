import axios from "axios";
import { useState, useEffect } from "react";

const RequestData = (config) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return {
    data,
    error,
  };
};
export default RequestData;
