// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import eventsList from "./data";
import EventTable from "../EventTable/EventTable";

// Searchbar component definition
const Searchbar = () => {
  const [search, setSearch] = useState("");

  // Function to convert search input to lowercase
  const searchLowerCase = search.toLowerCase();

  // Filtering events based on search input
  const filteredEvents = eventsList.filter((event) =>
    event.name.toLowerCase().includes(searchLowerCase)
  );

  // JSX rendering of Searchbar component
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
