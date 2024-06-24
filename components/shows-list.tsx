"use client";
import { useGetShowsQuery } from "@/features/shows/shows-slice";
import Image from "next/image";
import Link from "next/link";
import type { ShowsList } from "@/types/shows-list";

// Separate the data fetching logic into a custom hook
const useShows = () => {
  const { data = [], isFetching, isSuccess } = useGetShowsQuery();
  return { shows: data, isFetching, isSuccess };
};

// Create a helper component for conditional rendering
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

// Create a helper component for rendering show cards
const ShowCard = ({ show }: { show: ShowsList }) => (
  <li
    key={show.id}
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-10">
    <Link href={`/shows/${show.id}`}>
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <Image
            src={show.image.original}
            alt={show.name}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/f93PQAJaAN2rpMqlQAAAABJRU5ErkJggg=="
            priority
            className="w-full h-auto min-h-96 max-h-96 rounded-t-lg object-fill aspect-square"
          />
        </div>
        <div className="mt-2 mb-2 ps-6">
          <p className="text-xl font-bold text-gray-900 overflow-hidden whitespace-nowrap text-ellipsis">
            {show.name}
          </p>
          <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
            Rating: {show.rating.average}
          </p>
          <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
            Country: {show.network?.country?.name}
          </p>
          <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
            Runtime: {show.runtime} minutes
          </p>
        </div>
      </div>
    </Link>
  </li>
);

export default function ShowsList() {
  const { shows, isFetching, isSuccess } = useShows();

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <div className="bg-gray-100 flex flex-col justify-center">
          <ul className="divide-y divide-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
            {shows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </ul>
        </div>
      ) : (
        <h1>No shows found</h1>
      )}
    </>
  );
}
