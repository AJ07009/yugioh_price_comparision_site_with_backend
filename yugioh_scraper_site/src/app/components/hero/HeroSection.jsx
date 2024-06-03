"use client"
import React, { useState } from 'react';
import fs from 'fs';

const HeroSection = () => {
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
    const filePath = './data.txt'; // replace with your text file path
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const results = lines.filter((line) => line.includes(searchTerm));
    setSearchResults(results);
};

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
};

return (
    <div className="container md:px-6 w-full md:py-24 lg:py-32">

        <div className="container">
            <div className="pt-28 pl-80 flex items-center justify-center gap-4">
                <div className="flex-1">
            <input
            type="search"
            placeholder="    Search for products..."
            onKeyDown={handleKeyDown}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 text-lg text-gray-700 w-full h-12 rounded-lg"
            />
                </div>
            <button
            onClick={handleSearch}
            className="h-12 bg-yellow-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
            >Search</button>
            </div>
        </div>

        <ul className="list-none mb-0">
            {searchResults.map((result, index) => (
            <li key={index} className="py-2">
                {result}
            </li>
            ))}
        </ul>
    </div>
    );
};

export default HeroSection;