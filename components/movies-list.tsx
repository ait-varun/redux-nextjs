"use client";
// import { useAppDispatch } from "@/app/hooks/hooks";
import { useGetMoviesQuery } from "@/app/features/movies/movies-slice";
import Image from "next/image";

export default function MoviesList() {
  // const dispatch = useAppDispatch();

  const { data = [], isFetching } = useGetMoviesQuery();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center ">
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
                <ul role="list" className="divide-y divide-gray-200">
                  {data.map((movie) => (
                    <li key={movie.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                          <Image
                            src={movie.image.medium}
                            width={100}
                            height={100}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            className="h-10 w-10 rounded-md"
                            alt="Picture of the author"
                            priority={true}
                          />
                        </div>
                        <div className="ml-4 flex-1 md:flex md:justify-between md:items-center">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {movie.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
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
