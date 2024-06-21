"use client";
import { useState } from "react";
import { useSearchMoviesQuery } from "@/app/features/movies/movies-slice";
import Image from "next/image";
import Link from "next/link";

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data = [], isFetching } = useSearchMoviesQuery(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md p-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        {isFetching ? (
          <ul className="absolute top-full left-0 right-0 bg-white rounded-md shadow-lg mt-2">
            <li className="flex justify-center items-center px-4 py-2 hover:bg-gray-100">
              Searching
            </li>
          </ul>
        ) : (
          <ul className="absolute top-full left-0 right-0 bg-white rounded-md shadow-lg mt-2">
            {data.map((movie) => (
              <Link href={`/movies/${movie.show.id}`} key={movie.show.id}>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Image
                    src={
                      movie.show.image?.medium
                        ? movie.show.image?.medium
                        : "https://robohash.org/mail@ashallendesign.co.uk"
                    }
                    alt={movie.show.name}
                    width={500}
                    height={300}
                    className="w-16 h-16 rounded-md object-cover mr-4"
                  />
                  <span>{movie.show.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
