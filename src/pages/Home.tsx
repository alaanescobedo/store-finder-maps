import { MapStores, FavoriteStoresContainer } from "../containers";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { createStore } from "../models";
import { IDataStore } from "../types";

import data from '../store_directory.json'
import { useStores } from "../store";
import { Footer } from "../layout/Footer";

export const Home = () => {
  const { setAllStores, favoriteStores } = useStores()

  useEffect(() => {
    const dataMarkers = data.map((dataStore: IDataStore, i) => {
      const myStore = createStore(i, dataStore);

      favoriteStores.forEach((favStore) => {
        if (myStore.id === favStore.id) myStore.isFavorite = true
      })
      return myStore
    });

    setAllStores(dataMarkers)
  }, [])

  return (
    <div className={`App ${styles.container}`}>
      <MapStores />
      <FavoriteStoresContainer />
      <Footer />
    </div>
  );
};

export default Home;
