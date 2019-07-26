import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList";

import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
    </main>
  );
}
