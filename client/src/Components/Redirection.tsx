import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import axios from "axios";

const Redirection: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const SERVER_URI = `http://localhost:4000/api/url/${code}`;
  const history = useHistory();

  useEffect(() => {
    async function getRealUrl() {
      return await axios
        .get(SERVER_URI)
        .then((response) => {
          window.location.href = response.data;
        })
        .catch((err) => {
          // In case the code doesnt exists
          history.push("/");
        });
    }
    getRealUrl();
  }, []);

  return <div></div>;
};

export default Redirection;
