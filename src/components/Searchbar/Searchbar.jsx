// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import eventsList from "./data";
import EventTable from "../EventTable/EventTable";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const searchLowerCase = search.toLowerCase();

  const filteredEvents = eventsList.filter((event) =>
    event.name.toLowerCase().includes(searchLowerCase)
  );

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EventTable events={filteredEvents} />
    </div>
  );
};

export default Searchbar;
