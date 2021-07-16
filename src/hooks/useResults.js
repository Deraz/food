import yelp from "../api/yelp";
import { useState, useEffect } from "react";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchYelp = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          location: "NYC",
          term: searchTerm,
          limit: 50,
        },
      });
      setResults(res.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong..");
    }
  };

  useEffect(() => {
    searchYelp("");
  }, []);

  return [results, errorMessage, searchYelp];
};

export default useResults;
