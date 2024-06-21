"use client";
import { useGetShowsQuery } from "@/features/shows/shows-slice";
import Image from "next/image";
import Link from "next/link";

export default function ShowsList() {
  const { data = [], isFetching } = useGetShowsQuery();

  return (
    <>
      {" "}
      {isFetching ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="bg-gray-100 flex flex-col justify-center">
          <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Total Movies:{" "}
                  <span className="mt-1 max-w-2xl text-sm text-gray-500">
                    {data.length}
                  </span>
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <div className="overflow-hidden">
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
                      {data.map((movie) => (
                        <Link href={`/shows/${movie.id}`} key={movie.id}>
                          {" "}
                          <li className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col justify-center">
                              <div className="w-full">
                                <Image
                                  src={movie.image.original}
                                  alt={movie.name}
                                  priority={true}
                                  width={500}
                                  height={300}
                                  className="w-full h-auto min-h-96 max-h-96 rounded-t-lg object-fill"
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
      )}
    </>
  );
}
