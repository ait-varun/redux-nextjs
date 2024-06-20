"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

export default function Home() {
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Hello Vite + React!</p>

          <div>
            <p>Dogs to fetch:</p>
            <select
              value={numDogs}
              onChange={(e) => setNumDogs(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={breed.image.url}
                        alt={breed.name}
                        height={250}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </>
  );
}
