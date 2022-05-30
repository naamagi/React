import React, { useState, useEffect } from "react";
import axios from "axios";

const Ex19_1 = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/", {});
      setResult(data);
    };
    search();
  }, []);

  return (
    <div className="item">
      <div className="content">
        <div className="header">{result.title}</div>
        <span>{result.director}</span>
      </div>
    </div>
  );
};

export default Ex19_1;
