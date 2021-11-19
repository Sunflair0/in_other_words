import React, { createContext, useCallback, useState } from "react";
import useFetch from "../hooks/useFetch";
export const TreasureContext = createContext(null);

export function TreasuresProvider(props) {
  const { callAPI: deleteCall } = useFetch("DELETE");
  const { callAPI: addCall } = useFetch("POST");
  const [treasures, setTreasures] = useState([]);
  const addTreasure = useCallback(async (gif) => {
    const res = await addCall("/api/treasures/add", { gif });
    if (!res.success) {
      return console.error(res.error);
    }
    setTreasures((curr) => [...curr, res.data]);
  }, []);
  const deleteFavorite = useCallback(async (gif_id) => {
    const res = await deleteCall(`/api/treasure/delete/${gif_id}`);
    if (!res.success) {
      return console.error(res.error);
    }
    setTreasures((curr) => curr.filter((val) => val.gif_id !== gif_id));
  }, []);

  const clearFavorites = useCallback(() => setTreasures([]));

  return (
    <TreasureContext.Provider
      value={{
        treasures,
        addTreasure,
        deleteFavorite,
        clearFavorites,
        setTreasures,
      }}
    >
      {props.children}
    </TreasureContext.Provider>
  );
}
