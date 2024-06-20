"use client";

import { useGetMovieQuery } from "@/app/features/movies/movies-slice";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isFetching } = useGetMovieQuery(params.id);
  return (
    <>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-4xl  py-8 lg:mx-auto sm:mx-4 mx-4">
          <Link href="/" className="flex items-center mb-4">
            <MoveLeftIcon className="h-6 w-6 mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold mb-4">{data?.name}</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={data?.image?.original || ""}
              alt={data?.name ? data?.name : ""}
              height={500}
              width={500}
              className="w-fit h-auto min-h-96 max-h-96 rounded-lg object-fill"
              priority={true}
            />
            <div>
              <p className="text-gray-700 mb-2">Language: {data?.language}</p>
              <p className="text-gray-700 mb-4">
                Rating: {data?.rating?.average || ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
