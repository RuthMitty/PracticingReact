import { useEffect, useState } from "react";

export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
export default function Fetched() {
  const [data, setData] = useState<PokeResponse>();
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    console.log(page);
    console.log(loading);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
        );
        const datoss = await response.json();
        setData(datoss);
      } catch (error) {
        console.error("Error", error);
        setError(error as Error)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div>
      {loading ? <div>Loading...</div> : ""}
      {error ? error.toString() : ""}
      {data?.results?.map((pokemon: Result, index: number) => {
        return <p key={index}>{pokemon.name}</p>;
      })}
      <div>
        <button
          disabled={loading || page === 0}
          onClick={() => setPage((pag) => pag - 1)}
        >
          Anterior
        </button>
        <button disabled={loading} onClick={() => setPage((pag) => pag + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
