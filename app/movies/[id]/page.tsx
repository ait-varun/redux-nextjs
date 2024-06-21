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
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="max-w-4xl py-8 lg:mx-auto sm:mx-4 mx-4">
          <Link href="/" className="flex items-center mb-4">
            <MoveLeftIcon className="h-6 w-6 mr-2" />
            <span className="text-gray-600 hover:text-gray-800 transition-colors">
              Back to Home
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {data?.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={data?.image?.original || ""}
              alt={data?.name ? data?.name : ""}
              height={500}
              width={500}
              className="md:w-fit w-full  md:h-auto h-full min-h-96 md:max-h-96 rounded-lg md:object-cover object-fill  mb-4 md:mb-0 md:mr-8"
              priority={true}
            />
            <div>
              <p className="text-gray-600 mb-2">
                Language:{" "}
                <span className="font-semibold">
                  {data?.language ? data?.language : "N/A"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Rating:{" "}
                <span className="font-semibold">
                  {data?.rating?.average || "N/A"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Genres:{" "}
                <span className="font-semibold">
                  {data?.genres?.map((genre) => genre).join(", ") || "N/A"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Premiered:{" "}
                <span className="font-semibold">
                  {data?.premiered ? data?.premiered.toString() : "N/A"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Language:
                <span className="font-semibold">
                  {data?.language ? data?.language : "N/A"}
                </span>
              </p>
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                Description
              </h2>
              <p
                className="text-gray-600 text-balance"
                dangerouslySetInnerHTML={{
                  __html: data?.summary || "N/A",
                }}></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
