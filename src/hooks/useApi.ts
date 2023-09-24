import { useCallback } from "react";
import type { PokemonListStructure } from "../types/types";

const useApi = () => {
  const getPokemonList = useCallback( async (url:string): Promise<
    PokemonListStructure | string
  > => {

      try {
        const response = await fetch(url);
        const pokeList = (await response.json()) as PokemonListStructure;
        console.log(pokeList);

        return pokeList;
      } catch (error) {
        return (error as Error).message;
      }

  }, []);

  return { getPokemonList };
};

export default useApi;
