import React, { useEffect, useState } from "react";
import Papa from 'papaparse';
import Navbar from "./components/navbar";

export default function Recommender() {

  const [ text, setText ] = useState();
  useEffect(() =>{
    Papa.parse('/japan_recommendation.csv',{
      download: true, 

      complete: (results) => {
        console.log("Parsed:", results.data);
        setText(JSON.stringify(results.data,null,1));
      },

      error: (err) => {
        console.error("Parsing error:", err);
      }
    })
  });


  return (
    <section>
      <Navbar />
        
      <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Japan Travel Rankings
        </h1>
        <p className="text-xl text-gray-600">
          Discover amazing destinations across Japan with intelligent rankings
        </p>
      </div>
      <div>
        <h2>CSV Output:</h2>
        <pre>{text}</pre>
      </div>
    </div>
  </section>


  );
}