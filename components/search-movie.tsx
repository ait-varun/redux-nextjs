"use client";
import { useState } from "react";
import { useSearchShowQuery } from "@/app/features/shows/shows-slice";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollArea, setShowScrollArea] = useState(false);
  const { data = [], isFetching } = useSearchShowQuery(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowScrollArea(e.target.value.length > 0);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search shows..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>

      {showScrollArea && (
        <div className="fixed top-[4.8rem] left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex pt-4 justify-center px-4 w-full">
          <ScrollArea className="h-[80vh] w-full rounded-md bg-white p-4">
            {isFetching ? (
              <div className="flex justify-center items-center">
                {" "}
                <div className="flex justify-center items-center">
                  {" "}
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              </div>
            ) : (
              <>
                {data.map((movie) => (
                  <Link href={`/shows/${movie.show.id}`} key={movie.show.id}>
                    <div className="flex items-center px-4 py-2 hover:bg-gray-100">
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
                    </div>
                  </Link>
                ))}
              </>
            )}
          </ScrollArea>
        </div>
      )}
    </>
  );
}
