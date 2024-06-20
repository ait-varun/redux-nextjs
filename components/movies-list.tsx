"use client";
import { useGetMoviesQuery } from "@/app/features/movies/movies-slice";
import Image from "next/image";
import Link from "next/link";

export default function MoviesList() {
  const { data = [], isFetching } = useGetMoviesQuery();

  return (
    <div className="bg-gray-100 flex flex-col justify-center">
      <div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Movies
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Number of movies fetched: {data.length}
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-hidden">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
                  {data.map((movie) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                      {" "}
                      <li
                        key={movie.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-full">
                            <Image
                              src={movie.image.original}
                              width={500}
                              height={300}
                              alt={movie.name}
                              priority={true}
                              className="w-full h-auto min-h-96 max-h-96 rounded-t-lg object-fill"
                            />
                          </div>
                          <div className="mt-4">
                            <p className="text-xl font-bold text-gray-900">
                              {movie.name}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              Rating: {movie.rating.average}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              Country: {movie.network?.country?.name}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              Runtime: {movie.runtime}
                            </p>
                          </div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
