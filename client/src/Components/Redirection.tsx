import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Redirection: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const SERVER_URI = `http://localhost:4000/api/url/${code}`;
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    async function getRealUrl() {
      return await axios
        .get(SERVER_URI)
        .then((response) => {
          window.location.href = response.data;
        })
        .catch((err) => {
          setError(true);
        });
    }
    getRealUrl();
  }, []);

  return <div></div>;
};

export default Redirection;
