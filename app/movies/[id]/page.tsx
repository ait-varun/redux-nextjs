"use client";

import { useGetShowQuery } from "@/features/movies/movies-slice";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fetchCrewByShowId, clearCrew } from "@/features/shows/crew-slice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isFetching } = useGetShowQuery(params.id);
  const dispatch = useAppDispatch();
  const crewState = useAppSelector((state) => state.crew);
  const [showCrew, setShowCrew] = useState(false);

  const handleShowCrew = () => {
    if (!showCrew) {
      dispatch(fetchCrewByShowId(Number(params.id)));
    } else {
      dispatch(clearCrew());
    }
    setShowCrew((prev) => !prev);
  };

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
                Language: <span className="font-semibold">{data?.language}</span>
              </p>
              <p className="text-gray-600 mb-2">
                Rating: <span className="font-semibold">{data?.rating?.average || "N/A"}</span>
              </p>
              <p className="text-gray-600 mb-2">
                Genres: <span className="font-semibold">{data?.genres?.map((genre: string) => genre).join(", ") || "N/A"}</span>
              </p>
              <p className="text-gray-600 mb-2">
                Premiered: <span className="font-semibold">{data?.premiered?.toString() || "N/A"}</span>
              </p>
              <p className="text-gray-600 mb-2">
                Language: <span className="font-semibold">{data?.language}</span>
              </p>
              <h2 className="text-xl font-bold mb-2 text-gray-800">Description</h2>
              <p className="text-gray-600 text-balance" dangerouslySetInnerHTML={{ __html: data?.summary || "" }}></p>
              <div
                className="mt-4 flex items-center cursor-pointer select-none text-black-800 hover:text-black-900 font-bold"
                onClick={handleShowCrew}
                role="button"
                tabIndex={0}
                style={{ width: 'fit-content' }}
              >
                <span>Show Crew</span>
                <span className="ml-2 text-lg transition-transform" style={{ display: 'inline-block', transform: showCrew ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </div>
          </div>
          {showCrew && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Crew</h2>
              {crewState.loading && <p>Loading crew...</p>}
              {crewState.error && <p className="text-red-600">{crewState.error}</p>}
              {crewState.crew.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {crewState.crew.map((crewMember, idx) => (
                    <li key={idx} className="flex items-center space-x-4 p-4 border rounded-lg bg-gray-50">
                      {crewMember.person.image?.medium && (
                        <Image
                          src={crewMember.person.image.medium}
                          alt={crewMember.person.name}
                          width={500}
                          height={500}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className="font-semibold">{crewMember.person.name}</div>
                        <div className="text-gray-600 text-sm">{crewMember.type}</div>
                        <div className="text-gray-500 text-xs">{crewMember.person.gender}</div>
                        {crewMember.person.country && (
                          <div className="text-gray-400 text-xs">
                            {crewMember.person.country.name}
                          </div>
                        )}
                        {crewMember.person.birthday && (
                          <div className="text-gray-400 text-xs">
                            Birthday: {crewMember.person.birthday}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : !crewState.loading && <p>No crew data found.</p>}
            </div>
          )}
        </div>
      )}
    </>
  );
}
