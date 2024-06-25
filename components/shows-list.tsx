"use client";
import { useGetShowsQuery } from "@/features/shows/shows-slice";
import Image from "next/image";
import Link from "next/link";

export default function ShowsList() {
  const { data = [], isFetching } = useGetShowsQuery();

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center  mt-16">
        <>
          <ul className="divide-y divide-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
            {data.map((movie) => (
              <li
                key={movie.id} // Add the key prop here
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href={`/shows/${movie.id}`}>
                  <div className="flex flex-col justify-center">
                    <div>
                      <Image
                        src={movie.image.original || "N/A"}
                        alt={movie.name}
                        sizes="200px"
                        width={100}
                        height={100}
                        className="w-full h-auto min-h-96 max-h-96 rounded-t-lg"
                      />
                    </div>
                    <div className="mt-2 mb-2 ps-6">
                      <p className="text-xl font-bold text-gray-900 overflow-hidden whitespace-nowrap text-ellipsis">
                        {movie.name}
                      </p>
                      <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
                        Rating: {movie.rating.average}
                      </p>
                      <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
                        Country: {movie.network?.country?.name}
                      </p>
                      <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
                        Runtime: {movie.runtime} minutes
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
}
