import React, { useEffect, useState } from "react";
import Papa from 'papaparse';
import Navbar from "./components/navbar";
import Contact from "./components/contact";

export default function Recommender() {

  const [ text, setText ] = useState<string>();
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

      {/* content section */}
      <div className="max-w-7xl mx-auto">
        {/* page content */}
        {/* page header */}
        <div className="text-center mb-8">
          <h1 className="pt-4 text-5xl font-bold text-gray-800 mb-4">
            Japan Travel Rankings
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing destinations across Japan with intelligent rankings
          </p>
        </div>
        {/* page content */}
        <div className="mt-6 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
          <div>
            <h2>CSV Output:</h2>
            <pre className="max-h-144 overflow-y-auto p-4">    
              {text}
            </pre>
          </div>
        </div>
        {/* Contact*/}
        < Contact />
      </div>
  </section>


  );
}