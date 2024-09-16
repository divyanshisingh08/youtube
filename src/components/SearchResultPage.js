import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ResultVideo from "./ResultVideoCard";
import { API_KEY } from "../utils/constants";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // Get search query from URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const fetchSearchResults = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`
    );
    const data = await response.json();
    setResults(data.items);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for "{query}"</h2>
      <div>
        {results.map((result) =>(<Link key={result.id} to ={"/watch?v="+ result.id.videoId}>
          <ResultVideo key={result.id.videoId} info={result} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;

   
